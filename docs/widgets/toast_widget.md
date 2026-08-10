# ToastWidget

`#include "toolkit/toast_widget.hpp"`

A transient notification popup with a title, body text (plain or rich),
a close button, and an auto-dismiss timeout. Inherits `Widget`.

This can be used by your application to notify the user with some message, in
a non blocking way. Toast widgets sit on the left/bottom side of your window,
and are stacked on top, and have a timeout - after said timeout the toasts
automatically closes.

Features:

- Plain text or rich text (markdown).
- Timeout in seconds.
- Different background per request.


<Tabs>
<TabItem value="macos" label="macOS">

![ToastWidget screenshot](../assets/screenshots/macos/toast_widget.png)

</TabItem>
<TabItem value="material" label="Material">

![ToastWidget screenshot](../assets/screenshots/material/toast_widget.png)

</TabItem>
<TabItem value="windows-11" label="Windows 11">

![ToastWidget screenshot](../assets/screenshots/win11/toast_widget.png)

</TabItem>
<TabItem value="windows-95" label="Windows 95">

![ToastWidget screenshot](../assets/screenshots/win95/toast_widget.png)

</TabItem>
<TabItem value="plasma-6" label="Plasma 6">

![ToastWidget screenshot](../assets/screenshots/plasma6/toast_widget.png)

</TabItem>
<TabItem value="gnome" label="GNOME">

![ToastWidget screenshot](../assets/screenshots/gnome/toast_widget.png)

</TabItem>
</Tabs>

## Example

```cpp
auto toast = toolkit::ToastBuilder{}
                 .title("Saved")
                 .text("Your changes have been saved.")
                 .timeout(4.0f)
                 .build();
```

## Construction

Build directly, or use the `ToastBuilder` fluent factory:

```cpp
ToastWidget(std::string text, std::string title = "", std::string icon_path = "",
            float timeout = 10.0f, bool rich_text = false);
```

```cpp
class ToastBuilder {
  public:
    ToastBuilder &text(std::string t);
    ToastBuilder &rich_text(std::string t);
    ToastBuilder &title(std::string t);
    ToastBuilder &background(Color c);
    ToastBuilder &timeout(float t);
    std::unique_ptr<ToastWidget> build() const;
};
```

## API

| Member | Description |
|--------|-------------|
| `set_on_close(std::function<void()>)` | Callback fired when the toast is dismissed |
| `remaining_time()` | Seconds left before auto-dismiss |
| `update_remaining_time(float delta)` | Advance the countdown (call from your update/tick loop) |
| `is_expired()` | Whether `remaining_time() <= 0` |
| `expire()` | Force immediate expiry |
| `set_background_override(Color)` | Override the toast's background color |
