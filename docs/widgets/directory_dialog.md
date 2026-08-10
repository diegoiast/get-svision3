# DirectoryDialog

`#include "toolkit/directory_dialog.hpp"`

A chainable, `async`-style builder for choosing a directory — either the
platform's native picker or a toolkit-drawn one. Same `Future` pattern as
[`FileDialog`](file_dialog.md).

## Example

```cpp
toolkit::DirectoryDialog(window)
    .title("Choose Output Folder")
    .choose()
    .then([](std::optional<std::string> path) {
        if (path) set_output_dir(*path);
    });
```

## Construction

```cpp
explicit DirectoryDialog(Window *parent);
```

## API

| Member | Description |
|--------|-------------|
| `title(std::string_view)` | Dialog title |
| `start_path(std::string_view)` | Initial directory |
| `use_native(bool = true)` | Prefer the OS-native picker (default: on) |
| `choose()` → `Future` | Show the dialog |

`Future::then(Callback)` registers a `std::function<void(std::optional<std::string>)>`
called with the chosen path, or `std::nullopt` if cancelled.
