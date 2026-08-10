# Slider

`#include "toolkit/slider.hpp"`

A draggable horizontal or vertical slider over a `float` range. Inherits
`Widget`.

=== "macOS"
    ![Slider screenshot](../assets/screenshots/macos/slider.png)

=== "Material"
    ![Slider screenshot](../assets/screenshots/material/slider.png)

=== "Windows 11"
    ![Slider screenshot](../assets/screenshots/win11/slider.png)

=== "Windows 95"
    ![Slider screenshot](../assets/screenshots/win95/slider.png)

=== "Plasma 6"
    ![Slider screenshot](../assets/screenshots/plasma6/slider.png)

=== "GNOME"
    ![Slider screenshot](../assets/screenshots/gnome/slider.png)

## Example

```cpp
auto slider = std::make_unique<toolkit::Slider>();
slider->set_range(0.0f, 1.0f);
slider->on_change = [](toolkit::Slider &, float v) { /* ... */ };
```

## Construction

```cpp
explicit Slider(Orientation orientation = Orientation::Horizontal);
```

`Orientation` is `Horizontal | Vertical` (`types.hpp`).

## API

| Member | Description |
|--------|-------------|
| `value()` / `set_value(float)` | Current value |
| `minimum()` / `set_minimum(float)` | Range lower bound |
| `maximum()` / `set_maximum(float)` | Range upper bound |
| `set_range(float min, float max)` | Set both bounds at once |

## Callbacks

| Callback | Description |
|----------|-------------|
| `on_change` — `std::function<void(Slider&, float)>` | Fired as the value changes; also settable via `set_on_change(fn)` |
