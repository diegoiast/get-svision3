# ScrollableWidget

`#include "toolkit/scrollable_widget.hpp"`

Base class providing scrolling machinery (overlay/inline `Scrollbar`s,
scroll position, clamping) shared by scrollable widgets — including
[`ScrollArea`](scroll_area.md), [`ImageWidget`](image_widget.md),
[`TextEdit`](text_edit.md), [`IconGrid`](icon_grid.md),
[`ListView`](list_view.md), [`TreeView`](tree_view.md), and
[`TableView`](table_view.md). You typically use one of those concrete
widgets rather than `ScrollableWidget` directly.

## API

| Member | Description |
|--------|-------------|
| `scroll_to(float x, float y)` | Set scroll position directly |
| `scroll_x()` / `scroll_y()` | Current scroll offsets |

Subclasses override `on_scroll(float x, float y)` to react to scroll
changes, and call the protected `update_scrollbars(Size content_size)` /
`draw_scrollbars(Painter&)` helpers from their own layout/paint code.
