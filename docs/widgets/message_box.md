# MessageBox

`#include "toolkit/message_box.hpp"`

A chainable builder for modal message dialogs (info/warning/error/
question), with a set of static one-liner convenience methods for the
common cases.

## Example

```cpp
toolkit::MessageBox(window)
    .title("Discard changes?")
    .message("You have unsaved changes.")
    .icon(toolkit::MessageBoxIcon::Warning)
    .buttons(toolkit::MessageBoxButtons::YesNo)
    .show()
    .then([](toolkit::MessageBoxResult r) {
        if (r == toolkit::MessageBoxResult::Yes) discard();
    });
```

## Construction (builder)

```cpp
explicit MessageBox(Window *parent);
```

| Member | Description |
|--------|-------------|
| `title(std::string_view)` | Dialog title |
| `message(std::string_view)` | Body text |
| `markdown(bool = true)` | Render the message as Markdown |
| `icon(MessageBoxIcon)` | `None \| Information \| Warning \| Error \| Question` |
| `buttons(MessageBoxButtons)` | `Ok \| OkCancel \| YesNo \| YesNoCancel` |
| `show()` → `Future` | Display the dialog |

`Future::then(Callback)` registers a `std::function<void(MessageBoxResult)>`,
where `MessageBoxResult` is `Ok \| Cancel \| Yes \| No`.

## Static convenience methods

Each returns a `std::future<MessageBoxResult>` and shows a single-button
(`Ok`) dialog with the matching icon, except `show_static` which takes
explicit icon/buttons:

```cpp
static std::future<MessageBoxResult> information(Window*, std::string_view title, std::string_view message);
static std::future<MessageBoxResult> warning(Window*, std::string_view title, std::string_view message);
static std::future<MessageBoxResult> error(Window*, std::string_view title, std::string_view message);
static std::future<MessageBoxResult> question(Window*, std::string_view title, std::string_view message);
static std::future<MessageBoxResult> show_static(Window*, std::string_view title, std::string_view message,
                                                  MessageBoxIcon icon = Information,
                                                  MessageBoxButtons buttons = Ok);
```
