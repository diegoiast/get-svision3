# FileDialog

`#include "toolkit/file_dialog.hpp"`

A chainable, `async`-style builder for open/save file dialogs — either
the platform's native dialog or a toolkit-drawn one built on
[`FileBrowserWidget`](file_browser_widget.md).

## Example

```cpp
toolkit::FileDialog(window)
    .title("Open Project")
    .add_filter("C++ Files", "*.cpp *.hpp")
    .open()
    .then([](std::optional<std::string> path) {
        if (path) open_project(*path);
    });
```

## Construction

```cpp
explicit FileDialog(Window *parent);
```

## API

| Member | Description |
|--------|-------------|
| `title(std::string_view)` | Dialog title |
| `start_path(std::string_view)` | Initial directory |
| `default_name(std::string_view)` | Pre-filled filename (save dialogs) |
| `file_must_exist(bool = true)` | Reject non-existent files (open dialogs) |
| `add_filter(std::string_view label, std::string_view pattern)` | Add a file-type filter, e.g. `("C++ Files", "*.cpp *.hpp")` |
| `use_native(bool = true)` | Prefer the OS-native file picker over the toolkit one |
| `open()` / `save()` → `Future` | Show the dialog in open or save mode |

`Future::then(Callback)` registers a `std::function<void(std::optional<std::string>)>`
called with the chosen path, or `std::nullopt` if cancelled.
