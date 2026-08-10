# ContextMenu

`#include "toolkit/context_menu.hpp"`

A one-shot popup menu (right-click menu) built from a list of
[`MenuItem`](menu.md#menuitem)s. Unlike [`Menu`](menu.md), it isn't
attached to a widget beforehand — construct it with its items and call
`show()` at the click position.

=== "macOS"
    ![ContextMenu screenshot](../assets/screenshots/macos/context_menu.png)

=== "Material"
    ![ContextMenu screenshot](../assets/screenshots/material/context_menu.png)

=== "Windows 11"
    ![ContextMenu screenshot](../assets/screenshots/win11/context_menu.png)

=== "Windows 95"
    ![ContextMenu screenshot](../assets/screenshots/win95/context_menu.png)

=== "Plasma 6"
    ![ContextMenu screenshot](../assets/screenshots/plasma6/context_menu.png)

=== "GNOME"
    ![ContextMenu screenshot](../assets/screenshots/gnome/context_menu.png)

## Example

```cpp
using toolkit::MenuItem;
auto menu = toolkit::ContextMenu({
    MenuItem::action("Cut", [] { cut(); }),
    MenuItem::action("Copy", [] { copy(); }),
    MenuItem::action("Paste", [] { paste(); }),
});
menu.show(window, click_pos);
```

## Construction

```cpp
explicit ContextMenu(std::vector<MenuItem> items);
```

## API

| Member | Description |
|--------|-------------|
| `show(Window *window, Point position)` | Display the popup at a window-relative position |
