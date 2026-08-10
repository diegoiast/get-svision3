# ScrollArea

`#include "toolkit/scroll_area.hpp"`

A generic scrollable container: set any widget as content and `ScrollArea`
clips and scrolls it — the widget itself keeps its natural size from
`size_hint()`. Inherits [`ScrollableWidget`](scrollable_widget.md).

=== "macOS"
    ![ScrollArea screenshot](../assets/screenshots/macos/scroll_area.png)

=== "Material"
    ![ScrollArea screenshot](../assets/screenshots/material/scroll_area.png)

=== "Windows 11"
    ![ScrollArea screenshot](../assets/screenshots/win11/scroll_area.png)

=== "Windows 95"
    ![ScrollArea screenshot](../assets/screenshots/win95/scroll_area.png)

=== "Plasma 6"
    ![ScrollArea screenshot](../assets/screenshots/plasma6/scroll_area.png)

=== "GNOME"
    ![ScrollArea screenshot](../assets/screenshots/gnome/scroll_area.png)

## Example

```cpp
auto area = std::make_unique<toolkit::ScrollArea>();
area->set_content(make_long_form());
```

## Construction

```cpp
ScrollArea();
```

## API

| Member | Description |
|--------|-------------|
| `set_content(std::shared_ptr<Widget>)` → `weak_ptr<Widget>` | Set the scrolled content widget |
| `content()` | Currently set content |

Also inherits `scroll_to()`, `scroll_x()`, `scroll_y()` from
`ScrollableWidget`.
