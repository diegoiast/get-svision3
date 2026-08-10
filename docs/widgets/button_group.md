# ButtonGroup

`#include "toolkit/button_group.hpp"`

A convenience container that is itself an `HBoxLayout`: it arranges a row
of `Button`s and makes them behave like a mutually exclusive toggle group
(only one button in the group is checked at a time), similar to a segmented
control.

=== "macOS"
    ![ButtonGroup screenshot](../assets/screenshots/macos/button_group.png)

=== "Material"
    ![ButtonGroup screenshot](../assets/screenshots/material/button_group.png)

=== "Windows 11"
    ![ButtonGroup screenshot](../assets/screenshots/win11/button_group.png)

=== "Windows 95"
    ![ButtonGroup screenshot](../assets/screenshots/win95/button_group.png)

=== "Plasma 6"
    ![ButtonGroup screenshot](../assets/screenshots/plasma6/button_group.png)

=== "GNOME"
    ![ButtonGroup screenshot](../assets/screenshots/gnome/button_group.png)

## Example

```cpp
auto group = std::make_unique<toolkit::ButtonGroup>();
group->add_button("Left");
group->add_button("Center");
group->add_button("Right");
group->on_change = [](int index) { /* ... */ };
root->add_widget(std::move(group));
```

## Construction

```cpp
ButtonGroup group;
```

## API

| Member | Description |
|--------|-------------|
| `add_button(std::string text)` → `Button&` | Creates, adds, and registers a new button in the group |
| `add_button(std::unique_ptr<Button>)` → `Button&` | Adds and registers an existing button |
| `set_checked(int index)` | Programmatically select a button by index |
| `checked_index()` → `int` | Currently checked index, or `-1` |
| `checked_button()` → `Button*` | Currently checked button, or `nullptr` |

## Callbacks

| Callback | Description |
|----------|-------------|
| `on_change` — `std::function<void(int)>` | Fired with the newly checked index whenever selection changes |
