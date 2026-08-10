# Widgets & Modules

A reference of every public header under `include/toolkit/` (plus `db/` and
`i18n/`), grouped by area. All widget classes live in the `toolkit`
namespace unless noted otherwise.

Linked class names have their own API reference page. Most widgets derive
from `Widget` and share a common base API: `set_enabled()`/`is_enabled()`,
`set_visible()`/`is_visible()`/`show()`/`hide()`, `set_focusable()`/
`is_focusable()`, `set_tooltip()`, `set_background_color()`, `rect()`,
`size_hint()`, `set_min_size()`/`set_max_size()`.

## Core & application

| Header | Provides |
|--------|----------|
| `application.hpp` | `Application` — event loop, window creation, `run()` |
| `window.hpp` | `Window` — widget tree root, events, timers, tooltips |
| `widget.hpp` | `Widget` — base class all widgets derive from |
| `platform.hpp` | `PlatformApplication` / `PlatformWindow` backend interfaces |
| `painter.hpp` | Cairo-based `Painter` drawing API |
| `pixel_format.hpp` | Pixel format / surface format definitions |
| `clipboard.hpp` | System clipboard access (copy/paste) |
| `events.hpp` | `MouseEvent`, `KeyEvent` types |
| `types.hpp` | `Point`, `Size`, `Rect`, `Color`, `CursorShape`, `Key` |
| `window_title_bar.hpp` | Client-side decoration title bar |

## Layouts

| Header | Provides |
|--------|----------|
| `layout.hpp` | [Layouts](widgets/layout.md) — `VBoxLayout`, `HBoxLayout`, `GridLayout`, `StackedLayout`, `FormLayout` |

## Widgets

| Header | Provides |
|--------|----------|
| `button.hpp` | [`Button`](widgets/button.md) |
| `button_group.hpp` | [`ButtonGroup`](widgets/button_group.md) — exclusive/grouped button behavior |
| `label.hpp` | [`Label`](widgets/label.md) — multi-line, shrinkable |
| `checkbox.hpp` | [`Checkbox`](widgets/checkbox.md) |
| `radio_button.hpp` | [`RadioButton`](widgets/radio_button.md) + `RadioGroup` |
| `combobox.hpp` | [`Combobox`](widgets/combobox.md) — dropdown selection |
| `line_input.hpp` | [`LineInput`](widgets/line_input.md) — single-line text input with selection |
| `text_edit.hpp` | [`TextEdit`](widgets/text_edit.md) — multi-line text editor |
| `spin_box.hpp` | [`SpinBox`](widgets/spin_box.md) — numeric input |
| `slider.hpp` | [`Slider`](widgets/slider.md) |
| `progress_bar.hpp` | [`ProgressBar`](widgets/progress_bar.md) |
| `icon_grid.hpp` | [`IconGrid`](widgets/icon_grid.md) — grid-of-icons widget |
| `html_view.hpp` | [`HtmlView`](widgets/html_view.md) — Markdown/HTML rendering via litehtml |
| `rich_label.hpp` | [`RichLabel`](widgets/rich_label.md) — inline rich text label |
| `image_widget.hpp` | [`ImageWidget`](widgets/image_widget.md) — display a bitmap with zoom/pan |
| `toast_widget.hpp` | [`ToastWidget`](widgets/toast_widget.md) — transient notification popup |

## Containers & navigation

| Header | Provides |
|--------|----------|
| `tab_widget.hpp` | [`TabWidget`](widgets/tab_widget.md) — tabbed container |
| `splitter.hpp` | [`Splitter`](widgets/splitter.md) — resizable split panes |
| `scroll_area.hpp` | [`ScrollArea`](widgets/scroll_area.md) |
| `scrollable_widget.hpp` | [`ScrollableWidget`](widgets/scrollable_widget.md) base for scrollable content |
| `scrollbar.hpp` | [`Scrollbar`](widgets/scrollbar.md) |
| `dock_area.hpp` | [`DockArea`](widgets/dock_area.md) — dockable panel layout |
| `status_bar.hpp` | [`StatusBar`](widgets/status_bar.md) |

## Data & views

| Header | Provides |
|--------|----------|
| `item_model.hpp` | [`ItemModel`](widgets/item_model.md) — base data model for views |
| `list_view.hpp` | [`ListView`](widgets/list_view.md) — scrollable list with filterable adapters and async progress |
| `tree_view.hpp` | [`TreeView`](widgets/tree_view.md) |
| `table_view.hpp` | [`TableView`](widgets/table_view.md) |
| `file_tree_model.hpp` | [`FileTreeModel`](widgets/file_tree_model.md) — filesystem-backed tree model |
| `file_browser_widget.hpp` | [`FileBrowserWidget`](widgets/file_browser_widget.md) |

## Menus, toolbars & commands

| Header | Provides |
|--------|----------|
| `menubar.hpp` | [`MenuBar`](widgets/menubar.md) |
| `menu.hpp` | [`Menu`](widgets/menu.md) |
| `context_menu.hpp` | [`ContextMenu`](widgets/context_menu.md) — popup context menu |
| `toolbar.hpp` | [`Toolbar`](widgets/toolbar.md) |
| `command.hpp` | [`Command`](widgets/command.md) — keyboard shortcut / action commands |

## Dialogs & system integration

| Header | Provides |
|--------|----------|
| `file_dialog.hpp` | [`FileDialog`](widgets/file_dialog.md) — native or toolkit file picker |
| `directory_dialog.hpp` | [`DirectoryDialog`](widgets/directory_dialog.md) |
| `message_box.hpp` | [`MessageBox`](widgets/message_box.md) |
| `tray_icon.hpp` | [`TrayIcon`](widgets/tray_icon.md) — system tray integration |

## Charts (`toolkit/charts/`)

See the [charts overview](widgets/charts_overview.md) for the shared data
and interaction model.

| Header | Provides |
|--------|----------|
| `line_chart.hpp` | [`LineChart`](widgets/line_chart.md) |
| `bar_chart.hpp` | [`BarChart`](widgets/bar_chart.md) |
| `stacked_bar_chart.hpp` | [`StackedBarChart`](widgets/stacked_bar_chart.md) |
| `area_chart.hpp` | [`AreaChart`](widgets/area_chart.md) |
| `pie_chart.hpp` | [`PieChart`](widgets/pie_chart.md) |
| `scatter_plot.hpp` | [`ScatterPlot`](widgets/scatter_plot.md) |
| `histogram.hpp` | [`Histogram`](widgets/histogram.md) |
| `candlestick_chart.hpp` | [`CandlestickChart`](widgets/candlestick_chart.md) |
| `chart_defaults.hpp` | Shared default styling/config for charts |
| `chart_interaction.hpp` | Zoom/pan/hover interaction helpers |

## Text & rendering

| Header | Provides |
|--------|----------|
| `text_rasterizer.hpp` | `TextRasterizer` interface (platform-specific glyph rasterization) |
| `text/text_layout.hpp` | Text shaping and line-layout |
| `text/bidi.hpp` | Bidirectional (RTL/LTR) text support |
| `utf8.hpp` | UTF-8 string helpers |

`html_view.hpp` (`HtmlView`) is listed under [Widgets](#widgets) above,
since it's a widget you place directly in a UI.

## Theming

| Header | Provides |
|--------|----------|
| `theme.hpp` | `Theme` — active theme access |
| `theme_base.hpp` | `ThemeBase` — base class for theme implementations |
| `theme_factory.hpp` | Runtime theme selection |
| `theme_macos.hpp` | macOS-style theme |
| `theme_win11.hpp` | Windows 11-style theme |
| `theme_win95.hpp` | Windows 95-style theme |
| `theme_plasma.hpp` | Linux/Plasma-style theme |

Each theme supports both light and dark color schemes.

## Images & icons

| Header | Provides |
|--------|----------|
| `image.hpp` | `Image` — decoded image data |
| `stb_image_loader.hpp` | Image loading via [STB](https://github.com/nothings/stb) |
| `xdg_image_loader.hpp` | XDG-themed image loading |
| `lunasvg_image_loader.hpp` | SVG image loading via lunasvg |
| `xdg_icons.hpp` | XDG icon theme lookup (works on Windows/macOS too) |
| `xdg_icon_names.hpp` | Standard XDG icon name constants |

## Data & networking

| Header | Provides |
|--------|----------|
| `db/connection.hpp` | SQLite-backed `Connection` (API designed to support other DBMS) |
| `toolkit/net/http.hpp` | `Http` client |

## Internationalization

| Header | Provides |
|--------|----------|
| `i18n/catalog.hpp` | `Catalog` — gettext-style translation lookup |
| `i18n/builtin.hpp` | Built-in translation catalogs |

## Utilities

| Header | Provides |
|--------|----------|
| `stopwatch.hpp` | `Stopwatch` — high-resolution timer |
| `undo_stack.hpp` | `UndoStack` |
| `undo_command.hpp` | `UndoCommand` base class |
| `widget_loader.hpp` | Dump/reload widget-tree state to and from JSON |

---

Header paths are relative to `include/toolkit/` unless prefixed otherwise.
For platform-backend internals (X11, Win32, Wayland, macOS), see the
`src/toolkit/platform/` implementation directories in the repository.
