# Label

`#include "toolkit/label.hpp"`

A static text display. Multi-line, optionally shrinkable/elidable, and
never intercepts mouse input itself (`blocks_hit_test()` is `false`) — so a
label with a `buddy` widget transparently forwards focus/click-through to
that buddy, mirroring Qt's "buddy" pattern for mnemonic labels next to
inputs. Inherits `Widget`.

=== "macOS"
    ![Label screenshot](../assets/screenshots/macos/label.png)

=== "Material"
    ![Label screenshot](../assets/screenshots/material/label.png)

=== "Windows 11"
    ![Label screenshot](../assets/screenshots/win11/label.png)

=== "Windows 95"
    ![Label screenshot](../assets/screenshots/win95/label.png)

=== "Plasma 6"
    ![Label screenshot](../assets/screenshots/plasma6/label.png)

=== "GNOME"
    ![Label screenshot](../assets/screenshots/gnome/label.png)

## Example

```cpp
auto label = std::make_unique<toolkit::Label>("&Name:");
auto input = std::make_unique<toolkit::LineInput>();
label->set_buddy(input.get());
```

## Construction

```cpp
Label();
explicit Label(std::string text);
```

`text` may contain a `&` mnemonic (e.g. `"&Name:"`) which, combined with
`set_buddy()`, focuses the buddy widget when the mnemonic is triggered.

## API

| Member | Description |
|--------|-------------|
| `set_text(std::string const&)` / `text()` | Label content |
| `set_buddy(Widget*)` / `buddy()` | Widget that receives focus when this label's mnemonic fires |
| `set_color(Color const&)` | Override text color |
| `set_font_size(float)` | Override font size |
| `set_shrinkable(bool)` / `shrinkable()` | Allow the label to shrink below its natural text size |
| `set_alignment(Alignment)` / `alignment()` | `Alignment::Fill \| Start \| Center \| End` |
| `set_elide(bool)` / `elide()` | Elide (`…`) text that doesn't fit, instead of clipping |
