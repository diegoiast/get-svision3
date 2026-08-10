# Tutorial

This walks through getting SVision3 building on your machine and writing a
minimal window with a label and a button.

## Prerequisites

- A C++20 compiler (GCC, Clang, or MSVC)
- [CMake](https://cmake.org/) and [Conan 2](https://conan.io/)
- On Linux, `harfbuzz` and `freetype` installed via your system package
  manager (required on every distro, regardless of windowing backend).

## 1. Add svision3 as a connan requirent

If you use `conan.py`:
```python
from conan import ConanFile
from conan.tools.cmake import cmake_layout

class MyApp(ConanFile):
    settings = "os", "compiler", "build_type", "arch"
    generators = "CMakeDeps", "CMakeToolchain"

    def requirements(self):
        self.requires("svision3/0.0.1")
        self.requires("spdlog/1.14.1")

    def build_requirements(self):
        self.test_requires("catch2/[>=3.0 <4.0]")
```

If you use `conan.txt`
```ini
[requires]
svision3/0.0.1
spdlog/1.14.1
catch2/[>=3.0 <4.0]

[generators]
CMakeDeps
CMakeToolchain
```

## 2. Write your first window

Create a `main.cpp`:

```cpp
#include "toolkit/application.hpp"
#include "toolkit/button.hpp"
#include "toolkit/label.hpp"
#include "toolkit/layout.hpp"
#include "toolkit/window.hpp"

int main() {
    toolkit::Application app;
    auto window = app.create_window("Hello", {400, 200});

    // note the chainability, you get a reference to the widget
    auto root = std::make_unique<toolkit::VBoxLayout>()
        .set_margins({20, 20, 20, 20})
        .set_spacing(12);
    root->add_widget(std::make_unique<toolkit::Label>("Hello, world!"));
    root->add_widget(std::make_unique<toolkit::Button>("&Quit"))->on_click = [window] {
        // simple lambda as callback,
        window->close();
    };

    window->set_root(std::move(root));
    window->show();
    return app.run();
}
```

A few things worth noting:

- `Application` owns the event loop; `app.run()` blocks until the last
  window closes.
- Widgets are owned via `std::unique_ptr` and handed to their parent layout
  or window — no manual memory management or parenting calls needed.
- `&Quit` renders as **Q**uit with the `Q` underlined as a mnemonic
  (Alt+Q activates the button on platforms that support it).
- Layouts (`VBoxLayout` here) stack widgets vertically; use `HBoxLayout`
  for horizontal arrangements, and nest them to build more complex UIs.

## 3. Pick a rendering backend (optional)

The default backend is native per platform (CoreGraphics on macOS, GDI+ on
Windows, Cairo on Linux). Override it at runtime:

```bash
SVISION_PAINT=opengl ./build/Release/demo
```

## Pre make template

While this will work, and get you started many things like linting, `gitignore`,
indentation, building binaries on push etc - still need to be done.

Instead we got a ready made repository with all the setup already done. You should
clone it, (ideally - recommit the first commit with your own name, `git commit --amend --reset-author`)
and then push it to your own repository.

Visit - https://github.com/diegoiast/svision3-starter

```
git clone https://github.com/diegoiast/svision3-starter
```


## Next steps

Browse the [widget and module reference](widgets.md) to see everything
available — layouts, widgets, charts, theming, and more.
