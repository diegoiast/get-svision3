+++
date = '2026-06-11T21:45:30+03:00'
title = 'Acrhitecture'
menus = 'main'

+++

The retained toolkit is a cross platform toolkit written in C++. It is also multi backend
and engine. Meaning that on runtime we can support X11 or Wayland (on linux) for 
creating windows, but painting can be done using Cairo or OpenGL. There are also
differnt rasterizers (font "engines") chosen by the platform. There is support for
scaling (fractional scaling as well).

Widgets are positioned using a layout system, not absolute coordinates.

Widgets draw themeselves using a theme engine. Theme has a `Palette` which describes
the colors used to draw each element, and a `Style` which defines how the padding,
sizing (and other options) is implemented. 

There is a `BaseTheme` which contains an engine to draw all supported platforms
(contains no native code at all, all painting is done using `Painter`). There is
a theme factory which you can request a theme and a variant (light/dark). As a 
programmer consumer of this toolkit, you are not obligated to use the default theme
and choose your own theme. You can create themes that do not derive from `BaseTheme`.

The platform will also initialize an image provider. Currently onl `StbImageProvider`
is supported. 

Client side decoration is supported. There is API to interact with it, and you
can also code your own widget as a title bar. 

Build system is `CMake` with `Conan2` on all platforms.

Logging is done using `spdlog` - integrated into the library.


## API design

 * All code is inside namespace `toolkit3`.
 * Headers use the `*.hpp` extensions and are guarded by `pragma once`.
 * Class mames are `PascalNotation::`.
 * Methods are `snake_case()`.
 * Methods use the traditional syntax.
 * Free standing functions will use trailing return syntax (`auto function -> std::string`)
 * Classes will have a `get_..() const` function to get the value of a property.
 * Classes will have a `se_...() -> Widget` function which modifies the widget state
   and returns a reference for chainability.
 * Callbacks will are simple functions, with the first argument - the widget that triggered
   (so you can use the same function for several buttons for example).
 * Instead of callbacks, you can derive a class and override `on_mouse()` for example.
 * Basis of the toolkit imperative system (similar to Qt you initialize widgets
   and add to a layout, which is added to a window.
 * There is suport for declarative fluent API. 

## Declarative fluent API

This is an alternative API, mode modern. It is much more compact then the 
imperative API, and if you use proper nesting you can "see" the layout
of your widget in code (specially if your editor supports minimaps).

Example:

```
#include <svisiont3/declarative.hpp>
#include <spdlog/fmt/fmt.h>

using namespace svision3;

int main(int argc, char *argv[]) {
    Application app;
    auto window = app.create_window("Declarative Demo", {600, 500});

    auto rootWidget =
        ui::tab_widget()
            .add_tab(
                "Inputs",
                ui::vbox()
                    .add(ui::label("Demo").shrinkable(true))
                    .add(ui::checkbox("Enable feature").checked(true).tooltip("Toggle something"))
            .add_tab(
                    "Buttons",
                    ui::vbox()
                        .add(ui::label("Buttons Demo").shrinkable(true))
                        .add(ui::button("Regular Button").on_click([] {
                            spdlog::info("Regular button");
                        }))
                        .add(ui::button("Disabled Button").enabled(false))
                        .add(ui::button("Tooltip Button").tooltip("This is a tooltip").on_click([] {
                            spdlog::info("Tooltip button");
                        }))
        
    window->set_root(ui::vbox()
                         .margins(ui::no_margins())
                         .add(rootWidget)
                         .add(ui::spacer(), ui::expand)
                         .add(ui::hbox()
                                  .add(ui::button("&Quit").on_click([window] { window->close(); }))
                                  .add(ui::button("About").enabled(false))));

    window->show();
    return app.run();
}
```

## Platforms

When the application starts it will read the following
`SVISION_PLATFORM`, `SVISION_PAINTER` environment variables
to choose how to open windows, and draw graphics/text.

### Windows

Supports `Win32PlatformApplication` which creates `Win32PlatformWindow`.
This will setup `Win32TextRasterizer` (uses `TextOutW` to write text), 
and `GDIPainter` which uses GDI+ for graphics rendering.

There is also an `OpenGlPainter` - same code is compiled for Linux/macOS. 

### Linux 

On startup - it will try use the `WaylandPaltform`, if not avialable it will
use `X11Platform`. Both platforms will use `CairoPainter` and `CairoRasterizer`.

`OpenGlPainter` is also available, which will use the `CairoRasterizer`.

### macOS

Supports `MacOSNativePlatformApplication` `CoreGraphicsPainter` and `CoreGraphicsTextRasterizer`.

There is an OpenGL implementation - sharing code with Windows and Linux as well.
