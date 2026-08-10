# Command

`#include "toolkit/command.hpp"`

Represents a named, executable action — with an icon, tooltip, keyboard
shortcut, enabled/checked state — that can be shared across a
[`Button`](button.md), [`Menu`](menu.md) item, and [`Toolbar`](toolbar.md)
entry so they all stay in sync automatically.

## Example

```cpp
auto save = toolkit::Command::create("&Save", [] { save_document(); });
save->set_shortcut("Ctrl+S");
save->set_icon("document-save");

button->set_command(save);
menu->add_action(save);
toolbar->add_command(save);
```

## Construction

```cpp
Command(std::string name, std::function<void()> execute, bool enabled = true);
static Command::Ptr create(std::string name, std::function<void()> execute, bool enabled = true);
```

`Command::Ptr` is `std::shared_ptr<Command>` — pass the same instance to
multiple widgets to keep them in sync.

## API

| Member | Description |
|--------|-------------|
| `name()` / `set_name(std::string)` | Display name |
| `tooltip()` / `set_tooltip(std::string)` | Tooltip text |
| `icon()` / `set_icon(std::string)` / `icon_image()` | Icon name and resolved `Icon` image |
| `shortcut()` / `shortcut_string()` / `set_shortcut(std::string)` / `printable_shortcut()` | Keyboard shortcut, e.g. `set_shortcut("Ctrl+S")` |
| `is_enabled()` / `set_enabled(bool)` | Enabled state |
| `is_checked()` / `set_checked(bool)` | Checked state (for toggle-style commands) |
| `set_execute_func(std::function<void()>)` | Replace the action |
| `execute()` | Run the action if enabled |
| `matches_key_event(KeyEvent const&)` | Test whether a key event matches the shortcut |
