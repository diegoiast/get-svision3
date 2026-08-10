#!/usr/bin/env python3
"""Insert (or refresh) the per-theme screenshot gallery on each docs/widgets/*.md
page, one tab per theme, sourced from docs/assets/screenshots/<theme>/<widget>.png.

Run this after copying fresh screenshots into docs/assets/screenshots/ (see
README.md). Safe to re-run: it replaces an existing gallery block in place
rather than duplicating it, so it's fine to run every time screenshots are
regenerated, or after adding a new widget to widget_screenshot's registry.

Emits Docusaurus MDX <Tabs>/<TabItem> markup. <Tabs>/<TabItem> are
registered as global MDX components (see src/theme/MDXComponents.js), so no
per-file import is needed.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WIDGETS_DIR = ROOT / "docs" / "widgets"
SHOTS_DIR = ROOT / "docs" / "assets" / "screenshots"

# (directory slug under docs/assets/screenshots/, tab label) -- must match the
# ThemeEntry list in svision3's demo/widget_screenshot.cpp.
THEMES = [
    ("macos", "macOS"),
    ("material", "Material"),
    ("win11", "Windows 11"),
    ("win95", "Windows 95"),
    ("plasma6", "Plasma 6"),
    ("gnome", "GNOME"),
]


def gallery_block(title: str, name: str) -> list[str]:
    lines = ["<Tabs>"]
    for slug, label in THEMES:
        value = label.lower().replace(" ", "-")
        lines.append(f'<TabItem value="{value}" label="{label}">')
        lines.append("")
        lines.append(f"![{title} screenshot](../assets/screenshots/{slug}/{name}.png)")
        lines.append("")
        lines.append("</TabItem>")
    lines.append("</Tabs>")
    return lines


def update_page(md_path: Path, name: str) -> bool:
    text = md_path.read_text()
    lines = text.split("\n")
    if not lines or not lines[0].startswith("# "):
        return False
    title = lines[0].lstrip("# ").strip()
    block = gallery_block(title, name)

    heading_idxs = [i for i, l in enumerate(lines) if l.startswith("## ")]

    if "<Tabs>" in lines:
        start = lines.index("<Tabs>")
        end = next((i for i in heading_idxs if i > start), len(lines))
        new_lines = lines[:start] + block + [""] + lines[end:]
    else:
        if not heading_idxs:
            return False
        insert_at = heading_idxs[0]
        intro = lines[:insert_at]
        while intro and intro[-1] == "":
            intro = intro[:-1]
        new_lines = intro + [""] + block + [""] + lines[insert_at:]

    new_text = "\n".join(new_lines)
    if not new_text.endswith("\n"):
        new_text += "\n"
    if new_text == text:
        return False
    md_path.write_text(new_text)
    return True


def main():
    macos_dir = SHOTS_DIR / THEMES[0][0]
    if not macos_dir.is_dir():
        raise SystemExit(f"no screenshots found under {macos_dir} -- run widget_screenshot first")

    names = sorted(p.stem for p in macos_dir.glob("*.png"))
    changed, skipped = [], []

    for name in names:
        md_path = WIDGETS_DIR / f"{name}.md"
        if not md_path.exists():
            skipped.append((name, "no matching docs/widgets/*.md page"))
            continue
        if update_page(md_path, name):
            changed.append(name)

    print(f"Updated {len(changed)} page(s){': ' + ', '.join(changed) if changed else ''}")
    if skipped:
        print(f"Skipped {len(skipped)}:")
        for n, reason in skipped:
            print(f"  {n}: {reason}")


if __name__ == "__main__":
    main()
