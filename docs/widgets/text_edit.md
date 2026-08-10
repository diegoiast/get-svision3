# TextEdit

`#include "toolkit/text_edit.hpp"`

A multi-line, scrollable plain-text editor with selection, clipboard,
undo/redo, a line gutter, and current-line highlighting. Inherits
`ScrollableWidget`.

:::note
While this widget works, and has been tested with large data, its not ideal.
Its been actually vibe coded to the max, and eventually will be completelly
replaced. I do not consider this "quality code", even tough it does work pretty
well.
:::

Features:

- Undo/redo system (including merging similar events).
- Text selection.
- Copy/Paste/Cut support.
- Right click menu.
- Gutter with line numbers - optional.
- Current line is marked with a different background - optional.


<Tabs>
<TabItem value="macos" label="macOS">

![TextEdit screenshot](../assets/screenshots/macos/text_edit.png)

</TabItem>
<TabItem value="material" label="Material">

![TextEdit screenshot](../assets/screenshots/material/text_edit.png)

</TabItem>
<TabItem value="windows-11" label="Windows 11">

![TextEdit screenshot](../assets/screenshots/win11/text_edit.png)

</TabItem>
<TabItem value="windows-95" label="Windows 95">

![TextEdit screenshot](../assets/screenshots/win95/text_edit.png)

</TabItem>
<TabItem value="plasma-6" label="Plasma 6">

![TextEdit screenshot](../assets/screenshots/plasma6/text_edit.png)

</TabItem>
<TabItem value="gnome" label="GNOME">

![TextEdit screenshot](../assets/screenshots/gnome/text_edit.png)

</TabItem>
</Tabs>

## Example

```cpp
auto editor = std::make_unique<toolkit::TextEdit>("// start typing…");
editor->set_highlight_current_line(true);
```

## Construction

```cpp
explicit TextEdit(std::string text = "");
```

## API

| Member | Description |
|--------|-------------|
| `text()` / `set_text(std::string const&)` | Full document content |
| `set_highlight_current_line(bool)` / `highlight_current_line()` | Highlight the line the cursor is on |

`Position { size_t line, col; }` is a nested type identifying a cursor
location; it's ordered (`<`, `<=`) so ranges can be compared.

Built-in editing `Command::Ptr` members, wireable into menus/toolbars/
shortcuts: `select_all_cmd`, `cut_cmd`, `copy_cmd`, `paste_cmd`,
`undo_cmd`, `redo_cmd`.

## Callbacks

| Callback | Description |
|----------|-------------|
| `on_change` — `std::function<void()>` | Fired whenever the document content changes |
