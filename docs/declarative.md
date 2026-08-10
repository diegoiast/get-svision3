# Declarative API

`demo/declarative.hpp` (+ `demo/declarative_charts.hpp` for chart widgets)

A fluent, declarative wrapper around the widget API, used throughout
[`demo_declarative.cpp`](https://github.com/diegoiast/svision3/blob/master/demo/demo_declarative.cpp)
to build a whole window's UI as one expression tree instead of a sequence
of `std::make_shared<Widget>()` + `->set_x()` statements.

!!! note
    This lives under `demo/`, not `include/toolkit/` — it isn't part of the
    installed library. It's example code, header-only, with no source
    files of its own: copy `declarative.hpp` (and `declarative_charts.hpp`
    if you use charts) into your own project's include path to use it.
    Everything it does is expressible with the plain widget API documented
    elsewhere on this site; this is a more compact way to write it.

## The core idea: `Element<T>`

Every factory function (`ui::button()`, `ui::label()`, …) returns an
`Element<T>` — a move-only wrapper around a `shared_ptr<T>` whose setters
return `*this` by value, so calls chain the same way `Fluent<T>` setters do
on the widgets themselves, but uniformly across every widget type and with
shorter names (`.text()` instead of `set_text()`, `.tooltip()` instead of
`set_tooltip()`, etc.):

```cpp
auto btn = ui::button("&Save")
               .tooltip("Save the current document")
               .on_click([] { save(); });
```

Methods that only make sense for specific widget types are still
available on every `Element<T>`, but gated with `if constexpr` +
`static_assert` — calling `.checkable()` on an `Element<Label>`, for
example, fails to compile with a message naming which type the method
actually supports, rather than being silently available everywhere.

`Element<T>` converts implicitly to `T*` (via `->` and an implicit
conversion operator) and to `shared_ptr<Widget>`, so an `Element` can be
handed directly to `.add()` calls or stored and dereferenced like a normal
widget pointer. `.ref()` returns a `weak_ptr<T>` for storing in long-lived
callbacks without extending the widget's lifetime.

## Factory functions

| Function | Widget |
|----------|--------|
| `ui::button(text)` | [`Button`](widgets/button.md) |
| `ui::label(text)` | [`Label`](widgets/label.md) |
| `ui::checkbox(text)` | [`Checkbox`](widgets/checkbox.md) |
| `ui::radio_group()` / `ui::radio_button(text, group)` | [`RadioGroup`/`RadioButton`](widgets/radio_button.md) |
| `ui::combobox(items)` | [`Combobox`](widgets/combobox.md) |
| `ui::line_input(placeholder)` | [`LineInput`](widgets/line_input.md) |
| `ui::text_edit(text)` | [`TextEdit`](widgets/text_edit.md) |
| `ui::spin_box(value, min, max, step)` | [`SpinBox`](widgets/spin_box.md) |
| `ui::slider(value, min, max)` | [`Slider`](widgets/slider.md) |
| `ui::progress_bar(value)` | [`ProgressBar`](widgets/progress_bar.md) |
| `ui::icon_grid(model)` | [`IconGrid`](widgets/icon_grid.md) |
| `ui::html_view(html)` | [`HtmlView`](widgets/html_view.md) |
| `ui::rich_label(text)` / `ui::rich_label_md(markdown)` | [`RichLabel`](widgets/rich_label.md) |
| `ui::image_widget()` | [`ImageWidget`](widgets/image_widget.md) |
| `ui::spacer()` | An empty `Label`, typically added with `ui::expand` as a flexible gap |
| `ui::list_view(model)` | [`ListView`](widgets/list_view.md) |
| `ui::tree_view(model)` | [`TreeView`](widgets/tree_view.md) |
| `ui::table_view(model)` | [`TableView`](widgets/table_view.md) |
| `ui::file_browser()` | [`FileBrowserWidget`](widgets/file_browser_widget.md) |
| `ui::tab_widget()` | [`TabWidget`](widgets/tab_widget.md) |
| `ui::dock_area()` | [`DockArea`](widgets/dock_area.md) (returns a bespoke `DockElement`, not `Element<T>` — see below) |
| `ui::vbox()` / `ui::hbox()` | [`VBoxLayout`/`HBoxLayout`](widgets/layout.md) |
| `ui::hsplit(a, b, …)` / `ui::vsplit(a, b, …)` | [`Splitter`](widgets/splitter.md), pre-populated with 2+ children |
| `ui::scroll_area(content)` | [`ScrollArea`](widgets/scroll_area.md), pre-populated with content |
| `ui::menubar()` | [`MenuBar`](widgets/menubar.md) |
| `ui::menu(title)` | [`Menu`](widgets/menu.md) (returns a `MenuElement`) |
| `ui::command(name, action)` | [`Command`](widgets/command.md) (returns a `CommandElement`) |
| `ui::toolbar()` | [`Toolbar`](widgets/toolbar.md) |
| `ui::status_bar()` | [`StatusBar`](widgets/status_bar.md) |
| `ui::toast()` | Returns a plain `toolkit::ToastBuilder` directly (unwrapped) |

Chart factories (`demo/declarative_charts.hpp`, include alongside
`declarative.hpp`):

`ui::line_chart()`, `ui::bar_chart()`, `ui::stacked_bar_chart()`,
`ui::area_chart()`, `ui::pie_chart()`, `ui::scatter_plot()`,
`ui::histogram()`, `ui::candlestick_chart()` — each maps straight to the
matching [chart widget](widgets/charts_overview.md).

## Composing a tree

Layouts and containers get an `.add()` overload that accepts a child
`Element<W>` (by value or moved) and an optional stretch factor:

```cpp
ui::hbox()
    .add(ui::label("Name:"))
    .add(ui::line_input("Enter name"), ui::expand)   // expand == stretch 1
    .add(ui::button("Clear"));
```

`ui::expand` and `ui::no_stretch` are just named constants (`1` and `0`)
for the stretch factor, and `ui::no_spacing` similarly for `.spacing(0)`.
`ui::default_margins()`, `ui::default_margins_no_bottom()`, and
`ui::no_margins()` are ready-made `Margins` values for `.margins(...)`.

`TabWidget` gets its own `.add_tab(title, child)` (and a
`.add_tab(title, tooltip, child)` overload), `Toolbar` gets
`.command(...)` / `.separator()`, and `MenuBar` gets `.add_menu(...)` —
see the [menus](#menus-commands-and-toolbars) section below.

An `operator|` overload also exists as an alternate spelling of `.add()`
for layouts (`parent | child`), but the real demo code consistently uses
`.add()`, so that's what you'll want to reach for too.

### DockArea is a special case

`DockArea`'s API (`add_dock()` takes a `DockPosition`, `dock_tab_widget()`
returns a per-position `TabWidget`) doesn't fit the generic `Element<T>`
shape, so `ui::dock_area()` returns a dedicated `DockElement` instead:

```cpp
ui::dock_area()
    .center(ui::text_edit(EDITOR_DEFAULT_TEXT))
    .add_dock(toolkit::DockPosition::West, "Files", ui::tree_view(file_model))
    .add_dock(toolkit::DockPosition::South, "Output", ui::text_edit())
    .dock_size(toolkit::DockPosition::West, 240)
```

## Menus, commands, and toolbars

`ui::command(name, action)` returns a `CommandElement` wrapping a
[`Command`](widgets/command.md); `.shortcut()`, `.tooltip()`, and `.icon()`
configure it before it's attached to a menu, button, or toolbar.
`ui::menu(title)` returns a `MenuElement`, built up with `.action(...)`,
`.separator()`, and `.submenu(name, menu)`:

```cpp
auto save_cmd = ui::command("&Save", [] { save(); }).shortcut("Ctrl+S");

ui::menubar()
    .add_menu(ui::menu("&File")
                  .action(save_cmd)
                  .separator()
                  .submenu("Recent &Files",
                           ui::menu()
                               .action("&File1.txt", [] { open("File1.txt"); })
                               .action("&File2.txt", [] { open("File2.txt"); })))
```

A `Button` can carry a dropdown menu the same way `Button::set_menu()`
does directly, via `.menu(...)`:

```cpp
ui::button("Open")
    .icon(open_icon)
    .on_click(open_action)
    .menu(ui::menu()
              .action(ui::command("Open File", open_action))
              .action(ui::command("Open Image", open_image_action)))
```

`Toolbar` takes `Command`s directly, plus ad-hoc ones built inline:

```cpp
ui::toolbar()
    .command(save_cmd)
    .command("Disabled", "This command is disabled").disable()
    .separator()
    .add(ui::spacer(), ui::expand)
    .add(theme_combo)
```

## Events

Common callbacks are exposed as chainable setters — `.on_click(fn)`,
`.on_toggle(fn)`, `.on_change(fn)` (works across `LineInput`, `Slider`,
`SpinBox`, and `Combobox` — the right underlying callback signature is
picked per type), `.on_link_click(fn)` (`HtmlView`), `.on_selection_changed(fn)`
/ `.on_item_activated(fn)` (`IconGrid`), and `.on_file_activated(fn)` /
`.on_path_changed(fn)` (`FileBrowserWidget`). For anything not covered,
`Element<T>` converts to `T*`, so drop down to the plain widget API:
`combo->on_change = [](int i) { ... };`.

## A full example

Trimmed from `demo_declarative.cpp`'s top-level window assembly:

```cpp
window->set_root(
    ui::vbox()
        .margins(ui::no_margins())
        .spacing(ui::no_spacing)
        .add(ui::menubar()
                 .add_menu(ui::menu("&File")
                               .action(save_cmd)
                               .separator()
                               .action(exit_cmd))
                 .add_menu(ui::menu("&Edit")
                               .action(undo_cmd)
                               .action(redo_cmd)))
        .add(ui::toolbar()
                 .command(save_cmd)
                 .separator()
                 .add(ui::spacer(), ui::expand)
                 .add(theme_combo))
        .add(ui::tab_widget()
                 .add_tab("Main",
                          ui::vbox()
                              .add(ui::checkbox("Enable &notifications").checked(true))
                              .add(ui::hbox()
                                       .add(ui::button("&Quit").on_click([&window] { window->close(); }))))
                 .add_tab("Inputs",
                          ui::vbox()
                              .add(ui::line_input("Regular input"))
                              .add(ui::line_input("Password").password_mode(true))),
             ui::expand)
        .add(status_bar_elem));

window->resize_to_fit();
window->show();
```

## When to reach for this vs. the plain widget API

The plain, imperative widget API (documented on every page under
[Widgets & Modules](widgets.md)) is the stable, complete surface — every
widget method is available there, with no gaps. The declarative wrapper
only covers what `demo_declarative.cpp` actually needed (roughly one
setter per widget property in real use), gated by `static_assert` where a
method is type-specific. For anything the wrapper doesn't expose, drop to
`.get()`/`->` and call the widget directly — the two styles mix freely,
since an `Element<T>` *is* a thin handle around the real widget, not a
parallel object.
