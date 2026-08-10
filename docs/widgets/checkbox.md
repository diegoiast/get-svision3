# Checkbox

`#include "toolkit/checkbox.hpp"`

A labeled checkbox with two-state and optional tri-state (partial) modes.
Inherits `Widget`.

=== "macOS"
    ![Checkbox screenshot](../assets/screenshots/macos/checkbox.png)

=== "Material"
    ![Checkbox screenshot](../assets/screenshots/material/checkbox.png)

=== "Windows 11"
    ![Checkbox screenshot](../assets/screenshots/win11/checkbox.png)

=== "Windows 95"
    ![Checkbox screenshot](../assets/screenshots/win95/checkbox.png)

=== "Plasma 6"
    ![Checkbox screenshot](../assets/screenshots/plasma6/checkbox.png)

=== "GNOME"
    ![Checkbox screenshot](../assets/screenshots/gnome/checkbox.png)

## Example

```cpp
auto cb = std::make_unique<toolkit::Checkbox>("&Enable feature");
cb->on_toggle = [](bool checked) { /* ... */ };
```

## Construction

```cpp
explicit Checkbox(std::string text);
```

## API

| Member | Description |
|--------|-------------|
| `checked()` / `set_checked(bool)` | Simple on/off state |
| `check_state()` / `set_check_state(CheckState)` | Full state, including `Partial` |
| `is_tri_state()` / `set_tri_state(bool)` | Enable the third, partially-checked state |

`CheckState` is `Unchecked \| Checked \| Partial` (defined in `types.hpp`).

## Callbacks

| Callback | Description |
|----------|-------------|
| `on_toggle` — `std::function<void(bool)>` | Fired with the simplified checked/unchecked value |
| `on_state_change` — `std::function<void(CheckState)>` | Fired with the full tri-state value |
