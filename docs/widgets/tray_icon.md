# TrayIcon

`#include "toolkit/tray_icon.hpp"`

A cross-platform system tray icon facade, built with a chainable
`TrayIconBuilder`. Implemented via `StatusNotifierItem`/D-Bus on Linux and
`Shell_NotifyIcon` on Windows; `build()` returns `nullptr` on backends
without tray support (currently macOS, or Linux with no reachable D-Bus
session bus) so callers don't need to branch on platform.

Left-click toggles the owner window's visibility (the common "click the
tray icon to show/hide" pattern); right-click opens the action menu.

## Construction

```cpp
auto tray = toolkit::TrayIcon::builder()
                .icon(app.load_icon("utilities-terminal", 22, ""))
                .tooltip("My App")
                .id("my-app-tray")
                .owner_window(window)
                .actions(std::move(menu_actions))
                .build();
```

## TrayIconBuilder

| Member | Description |
|--------|-------------|
| `icon(Icon)` | Tray image, portable across all backends |
| `icon_name(std::string)` | Freedesktop icon-theme name (Linux only); lets the host re-render on theme/DPI changes |
| `tooltip(std::string)` | Hover tooltip |
| `id(std::string)` | Stable internal identifier (unused on Windows) |
| `owner_window(std::shared_ptr<Window> const&)` | Window toggled by a left-click; held weakly |
| `action(Command::Ptr)` / `actions(std::vector<Command::Ptr>)` | Right-click menu items, built from [`Command`](command.md)s |
| `build()` → `std::unique_ptr<TrayIcon>` | Create the tray icon, or `nullptr` if unsupported |
