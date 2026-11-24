"""Render an episode timeline.json to part*.mp4 segments (or --poster / --stills) via Playwright + ffmpeg.
Usage:
  python render.py <outdir> [--workers 2]
  python render.py <outdir> --poster <poster.jpg>
  python render.py <outdir> --stills 10,60,120
"""
import asyncio, base64, functools, http.server, json, math, os, socketserver, subprocess, sys, threading, time
from playwright.async_api import async_playwright

HERE = os.path.dirname(os.path.abspath(__file__))

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

def start_server():
    handler = functools.partial(QuietHandler, directory=HERE)
    httpd = socketserver.TCPServer(("127.0.0.1", 0), handler)
    port = httpd.server_address[1]
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd, port

def opt(args, key, default=None):
    if key in args:
        idx = args.index(key)
        if idx + 1 < len(args):
            return args[idx + 1]
    return default

async def make_page(browser, port, tl):
    pg = await browser.new_page(viewport={"width": 1280, "height": 720})
    pg.on("pageerror", lambda e: print("PAGEERR", e, file=sys.stderr))
    await pg.goto(f"http://127.0.0.1:{port}/render.html")
    await pg.evaluate("(tl) => window.init(tl)", tl)
    return pg

async def main():
    out = os.path.abspath(sys.argv[1])
    args = sys.argv[2:]
    with open(os.path.join(out, "timeline.json"), "r", encoding="utf-8") as f:
        tl = json.load(f)

    httpd, port = start_server()
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(args=["--disable-gpu-vsync"])
            poster = opt(args, "--poster")
            if poster:
                pg = await make_page(browser, port, tl)
                d = await pg.evaluate("(t) => window.frameJpeg(t, 0.85)", tl.get("poster_t", 8))
                os.makedirs(os.path.dirname(os.path.abspath(poster)), exist_ok=True)
                with open(poster, "wb") as pf:
                    pf.write(base64.b64decode(d.split(",", 1)[1]))
                await browser.close()
                return

            stills = opt(args, "--stills")
            if stills:
                pg = await make_page(browser, port, tl)
                sdir = os.path.join(out, "stills")
                os.makedirs(sdir, exist_ok=True)
                for ts in stills.split(","):
                    tval = float(ts)
                    d = await pg.evaluate("(t) => window.frameJpeg(t, 0.85)", tval)
                    with open(os.path.join(sdir, f"t{tval:06.1f}.jpg"), "wb") as sf:
                        sf.write(base64.b64decode(d.split(",", 1)[1]))
                await browser.close()
                return

            fps = tl.get("fps", 24)
            total_frames = math.ceil(tl["duration"] * fps)
            workers = min(2, max(1, int(opt(args, "--workers", "1"))))
            per = math.ceil(total_frames / workers)
            t0 = time.time()

            async def render_worker(w):
                a = w * per
                b = min(total_frames, a + per)
                if a >= b:
                    return None
                pg = await make_page(browser, port, tl)
                seg = os.path.join(out, f"part{w}.mp4")
                proc = await asyncio.create_subprocess_exec(
                    "ffmpeg", "-y", "-loglevel", "error",
                    "-f", "image2pipe", "-framerate", str(fps), "-c:v", "mjpeg", "-i", "-",
                    "-vf", "scale=in_range=full:out_range=tv,format=yuv420p",
                    "-c:v", "libx264", "-threads", "1", "-preset", "veryfast", "-crf", "24",
                    "-pix_fmt", "yuv420p", "-color_range", "tv", "-tune", "animation",
                    seg,
                    stdin=asyncio.subprocess.PIPE,
                )
                for i in range(a, b, 16):
                    ts = [k / fps for k in range(i, min(b, i + 16))]
                    ds = await pg.evaluate("(ts) => ts.map(t => window.frameJpeg(t, 0.88))", ts)
                    for d in ds:
                        proc.stdin.write(base64.b64decode(d.split(",", 1)[1]))
                    await proc.stdin.drain()
                    if w == 0 and ((i - a) // 16) % 15 == 0:
                        print(f"w0 {i - a}/{b - a}  {time.time() - t0:.0f}s", flush=True)
                proc.stdin.close()
                await proc.wait()
                if proc.returncode != 0:
                    raise RuntimeError(f"ffmpeg worker {w} exited with {proc.returncode}")
                return f"part{w}.mp4"

            parts = await asyncio.gather(*(render_worker(w) for w in range(workers)))
            parts = [p_name for p_name in parts if p_name]
            with open(os.path.join(out, "parts.txt"), "w", encoding="utf-8") as pf:
                pf.write("\n".join(f"file '{p_name}'" for p_name in parts) + "\n")
            print(f"frames done {time.time() - t0:.0f}s")
            await browser.close()
    finally:
        httpd.shutdown()

if __name__ == "__main__":
    asyncio.run(main())
