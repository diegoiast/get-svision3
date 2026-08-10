# ProgressBar

`#include "toolkit/progress_bar.hpp"`

A simple, non-interactive progress indicator over a `0.0`–`1.0` range.
Inherits `Widget`.

<Tabs>
<TabItem value="macos" label="macOS">

![ProgressBar screenshot](../assets/screenshots/macos/progress_bar.png)

</TabItem>
<TabItem value="material" label="Material">

![ProgressBar screenshot](../assets/screenshots/material/progress_bar.png)

</TabItem>
<TabItem value="windows-11" label="Windows 11">

![ProgressBar screenshot](../assets/screenshots/win11/progress_bar.png)

</TabItem>
<TabItem value="windows-95" label="Windows 95">

![ProgressBar screenshot](../assets/screenshots/win95/progress_bar.png)

</TabItem>
<TabItem value="plasma-6" label="Plasma 6">

![ProgressBar screenshot](../assets/screenshots/plasma6/progress_bar.png)

</TabItem>
<TabItem value="gnome" label="GNOME">

![ProgressBar screenshot](../assets/screenshots/gnome/progress_bar.png)

</TabItem>
</Tabs>

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
