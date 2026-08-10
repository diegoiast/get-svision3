# ProgressBar

`#include "toolkit/progress_bar.hpp"`

A simple, non-interactive progress indicator over a `0.0`–`1.0` range.
Inherits `Widget`.

=== "macOS"
    ![ProgressBar screenshot](../assets/screenshots/macos/progress_bar.png)

=== "Material"
    ![ProgressBar screenshot](../assets/screenshots/material/progress_bar.png)

=== "Windows 11"
    ![ProgressBar screenshot](../assets/screenshots/win11/progress_bar.png)

=== "Windows 95"
    ![ProgressBar screenshot](../assets/screenshots/win95/progress_bar.png)

=== "Plasma 6"
    ![ProgressBar screenshot](../assets/screenshots/plasma6/progress_bar.png)

=== "GNOME"
    ![ProgressBar screenshot](../assets/screenshots/gnome/progress_bar.png)

## Example

```cpp
auto bar = std::make_unique<toolkit::ProgressBar>();
bar->set_value(0.42f);
```

## Construction

```cpp
ProgressBar();
```

## API

| Member | Description |
|--------|-------------|
| `set_value(float)` / `value()` | Progress fraction |
