// Markdown-lite + {{maths}} renderer used for every piece of content text.
// See the format notes at the top of lib/types.ts.
import { Fragment, type ReactNode } from "react";
import { findMathClose, toMathML } from "@/lib/mathml";

// Keys are positions within one render call, so re-rendering the same text keeps
// the same DOM (no remounts: text selection and aria-live regions survive).

/** Find a closing inline markdown delimiter (`**`, `*`, or `` ` ``), skipping over `{{...}}` math spans. */
function findDelimClose(s: string, start: number, delim: "**" | "*" | "`"): number {
  let i = start;
  while (i < s.length) {
    if (delim !== "`" && s.startsWith("{{", i)) {
      const end = findMathClose(s, i);
      if (end >= 0) {
        i = end + 2;
        continue;
      }
    }
    if (delim === "**") {
      if (s.startsWith("**", i)) return i;
    } else if (delim === "`") {
      if (s[i] === "`") return i;
    } else {
      if (s[i] === "*" && !s.startsWith("**", i) && i > start && !/\s/.test(s[i - 1])) return i;
    }
    i++;
  }
  return -1;
}

/** Inline: {{maths}}, **bold** (including nested {{maths}}), *italic*, `code`. Newlines become <br/>. */
export function renderInline(text: string): ReactNode[] {
  const s = String(text ?? "");
  const out: ReactNode[] = [];
  const k = () => out.length;
  let buf = "";
  const flush = () => {
    if (buf) {
      out.push(<Fragment key={k()}>{buf}</Fragment>);
      buf = "";
    }
  };

  let i = 0;
  while (i < s.length) {
    if (s.startsWith("{{", i)) {
      const end = findMathClose(s, i);
      if (end > i + 2) {
        flush();
        out.push(
          <span key={k()} className="math" dangerouslySetInnerHTML={{ __html: toMathML(s.slice(i + 2, end)) }} />,
        );
        i = end + 2;
        continue;
      }
    }
    if (s[i] === "\n") {
      flush();
      out.push(<br key={k()} />);
      i++;
      continue;
    }
    if (s.startsWith("**", i)) {
      const end = findDelimClose(s, i + 2, "**");
      if (end > i + 2) {
        flush();
        out.push(<strong key={k()}>{renderInline(s.slice(i + 2, end))}</strong>);
        i = end + 2;
        continue;
      }
    }
    if (s[i] === "`") {
      const end = findDelimClose(s, i + 1, "`");
      if (end > i + 1) {
        flush();
        out.push(<code key={k()}>{s.slice(i + 1, end)}</code>);
        i = end + 1;
        continue;
      }
    }
    if (s[i] === "*" && i + 1 < s.length && !/\s/.test(s[i + 1]) && s[i + 1] !== "*") {
      const end = findDelimClose(s, i + 1, "*");
      if (end > i + 1) {
        flush();
        out.push(<em key={k()}>{renderInline(s.slice(i + 1, end))}</em>);
        i = end + 1;
        continue;
      }
    }
    buf += s[i];
    i++;
  }
  flush();
  return out;
}

function splitRow(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

function renderTable(lines: string[], key: number): ReactNode {
  const rows = lines.filter((l) => !/^\s*\|?\s*:?-{2,}/.test(l));
  const [head, ...body] = rows.map(splitRow);
  return (
    <div key={key} className="rich-table-wrap">
      <table className="rich-table">
        <thead>
          <tr>{head.map((c, i) => <th key={i}>{renderInline(c)}</th>)}</tr>
        </thead>
        <tbody>
          {body.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{renderInline(c)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Block-level renderer: paragraphs, bullets, numbered lists, tables, callouts, calc lines. */
export function renderBlocks(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const k = () => out.length;
  const blocks = String(text ?? "").replace(/\r\n/g, "\n").split(/\n\s*\n/);
  for (const block of blocks) {
    if (!block.trim()) continue;
    const lines = block.split("\n");
    // Group consecutive lines of the same kind inside a block.
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^\s*\|/.test(line)) {
        const tbl: string[] = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) tbl.push(lines[i++]);
        out.push(renderTable(tbl, k()));
      } else if (/^\s*[-•]\s+/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\s*[-•]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-•]\s+/, ""));
        out.push(<ul key={k()} className="rich-ul">{items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ul>);
      } else if (/^\s*\d+[.)]\s+/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)]\s+/, ""));
        out.push(<ol key={k()} className="rich-ol">{items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ol>);
      } else if (/^>\s?/.test(line)) {
        const q: string[] = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ""));
        out.push(<blockquote key={k()} className="rich-callout">{renderInline(q.join("\n"))}</blockquote>);
      } else if (/^( {4}|\t)/.test(line)) {
        const c: string[] = [];
        while (i < lines.length && /^( {4}|\t)/.test(lines[i])) c.push(lines[i++].replace(/^( {4}|\t)/, ""));
        out.push(<div key={k()} className="rich-calc">{c.map((l, j) => <div key={j}>{renderInline(l)}</div>)}</div>);
      } else {
        const p: string[] = [];
        while (
          i < lines.length &&
          !/^\s*\|/.test(lines[i]) &&
          !/^\s*[-•]\s+/.test(lines[i]) &&
          !/^\s*\d+[.)]\s+/.test(lines[i]) &&
          !/^>\s?/.test(lines[i]) &&
          !/^( {4}|\t)/.test(lines[i])
        )
          p.push(lines[i++]);
        out.push(<p key={k()}>{renderInline(p.join("\n"))}</p>);
      }
    }
  }
  return out;
}

/** Rich block text. */
export function Rich({ text, className }: { text: string; className?: string }) {
  return <div className={`rich ${className ?? ""}`}>{renderBlocks(text)}</div>;
}

/** Rich inline text (for options, hints, short labels). */
export function RichInline({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{renderInline(text)}</span>;
}

/** Inline SVG diagram from trusted content. */
export function Diagram({ svg, caption }: { svg: string; caption?: string }) {
  return (
    <figure className="diagram">
      <div className="diagram-svg" dangerouslySetInnerHTML={{ __html: svg }} />
      {caption ? <figcaption>{renderInline(caption)}</figcaption> : null}
    </figure>
  );
}
