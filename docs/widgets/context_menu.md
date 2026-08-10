# ContextMenu

`#include "toolkit/context_menu.hpp"`

A one-shot popup menu (right-click menu) built from a list of
[`MenuItem`](menu.md#menuitem)s. Unlike [`Menu`](menu.md), it isn't
attached to a widget beforehand — construct it with its items and call
`show()` at the click position.

<Tabs>
<TabItem value="macos" label="macOS">

![ContextMenu screenshot](../assets/screenshots/macos/context_menu.png)

</TabItem>
<TabItem value="material" label="Material">

![ContextMenu screenshot](../assets/screenshots/material/context_menu.png)

</TabItem>
<TabItem value="windows-11" label="Windows 11">

![ContextMenu screenshot](../assets/screenshots/win11/context_menu.png)

</TabItem>
<TabItem value="windows-95" label="Windows 95">

![ContextMenu screenshot](../assets/screenshots/win95/context_menu.png)

</TabItem>
<TabItem value="plasma-6" label="Plasma 6">

![ContextMenu screenshot](../assets/screenshots/plasma6/context_menu.png)

</TabItem>
<TabItem value="gnome" label="GNOME">

![ContextMenu screenshot](../assets/screenshots/gnome/context_menu.png)

</TabItem>
</Tabs>

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
