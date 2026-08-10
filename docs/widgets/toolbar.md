# Toolbar

`#include "toolkit/toolbar.hpp"`

A horizontal strip of [`Command`](command.md)-backed buttons, separators,
and arbitrary embedded widgets. Inherits `Widget`.

=== "macOS"
    ![Toolbar screenshot](../assets/screenshots/macos/toolbar.png)

=== "Material"
    ![Toolbar screenshot](../assets/screenshots/material/toolbar.png)

=== "Windows 11"
    ![Toolbar screenshot](../assets/screenshots/win11/toolbar.png)

=== "Windows 95"
    ![Toolbar screenshot](../assets/screenshots/win95/toolbar.png)

=== "Plasma 6"
    ![Toolbar screenshot](../assets/screenshots/plasma6/toolbar.png)

=== "GNOME"
    ![Toolbar screenshot](../assets/screenshots/gnome/toolbar.png)

## Example

```cpp
auto toolbar = std::make_unique<toolkit::Toolbar>();
toolbar->add_command(save_command);
toolbar->add_command(open_command);
toolbar->add_separator();
toolbar->add_widget(std::make_unique<toolkit::LineInput>("Search…"));
```

## Construction

```cpp
Toolbar();
```

## API

| Member | Description |
|--------|-------------|
| `add_command(Command::Ptr)` | Append a command as a toolbar button |
| `add_widget(std::shared_ptr<Widget>, float stretch = 0)` → `weak_ptr<Widget>` | Append an arbitrary widget (e.g. a search box) |
| `add_separator()` | Append a visual separator |
| `insert_command(int index, Command::Ptr)` / `insert_separator(int index)` | Insert at a position |
| `remove_range(int index, int count)` | Remove a range of items |
| `item_count()` | Number of items |
| `clear()` | Remove all items |

A free function `create_toolbar_separator()` returns a standalone
separator widget, for cases building toolbar-like layouts manually.
