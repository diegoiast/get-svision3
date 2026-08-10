# Scrollbar

`#include "toolkit/scrollbar.hpp"`

A standalone horizontal or vertical scrollbar with stepper buttons, a
draggable thumb, and small/page step sizes. Used internally by
[`ScrollableWidget`](scrollable_widget.md), but usable standalone as a
generic ranged control. Inherits `Widget`.

<Tabs>
<TabItem value="macos" label="macOS">

![Scrollbar screenshot](../assets/screenshots/macos/scrollbar.png)

</TabItem>
<TabItem value="material" label="Material">

![Scrollbar screenshot](../assets/screenshots/material/scrollbar.png)

</TabItem>
<TabItem value="windows-11" label="Windows 11">

![Scrollbar screenshot](../assets/screenshots/win11/scrollbar.png)

</TabItem>
<TabItem value="windows-95" label="Windows 95">

![Scrollbar screenshot](../assets/screenshots/win95/scrollbar.png)

</TabItem>
<TabItem value="plasma-6" label="Plasma 6">

![Scrollbar screenshot](../assets/screenshots/plasma6/scrollbar.png)

</TabItem>
<TabItem value="gnome" label="GNOME">

![Scrollbar screenshot](../assets/screenshots/gnome/scrollbar.png)

</TabItem>
</Tabs>

## Construction

```cpp
explicit Scrollbar(Orientation o = Orientation::Horizontal);
```

## API

| Member | Description |
|--------|-------------|
| `set_value(float)` / `value()` | Current position |
| `set_range(float min, float max)` / `min()` / `max()` | Value range |
| `set_step_small(float)` | Step size for the stepper buttons/arrow keys |
| `set_step_page(float)` | Step size for track (page) clicks |
| `is_dragging()` | Whether the thumb is currently being dragged |

## Callbacks

| Callback | Description |
|----------|-------------|
| `on_change` — `std::function<void(float)>` | Fired with the new value whenever it changes |
