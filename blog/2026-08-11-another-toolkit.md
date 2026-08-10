---
slug: another-toolkit
title: Another toolkit?
authors: [diegoiast]
tags: [announcement]
---

If you are trying to build a *desktop* GUI application you have several options.
Each one has its own strenghs.

However - you will get a non native solution, or a limited GUI, or a very large
installer. In some cases, things like utilities to modify a small hardware you
provide (the Logiteck mouse utilities, Rapoo has a similar utility or maybe
a program to flush the firmware of your new USB adget) - using available
solutions just do not scale, or are non optimal.

Other solutions are great (specially Qt, DearImgui and Slint, which are my
recommendations). But I think SVision3 can provide a valid alternative to existing
toolkit libraries,in a very small codebase withtout compromising on features.
This list does not aim to "trash" competitions - but to praise them. They all have
a their place.

{/* truncate */}

## Electron with JavaScript/Typescript.

[Electron](https://www.electronjs.org/) based application seem to be the prefered method in the industry. This is
what [VSCode](https://code.visualstudio.com/), [Slack](https://slack.com/downloads/windows) and lots of other use.

You get the very large
ecosystem of `nodejs` - and an easy way to target the major platforms. Another
huge benefit - is that you can share code with your web site, and provide a very
similar experience.

The problem this solution cannot solve - is that you are still writing a portable
website into a window. Integration with the user's desktop/platform is not ideal.
You are locked in JavaScript (wasting d-ccache, and fearing the underterministic
heap cleanup) and any interaction with the OS needs to be marshalled.


## Tauri - Rust+JavaScript/TypeScript

Use [Tauri](https://github.com/tauri-apps/tauri) with  JavaScript/Typescript
for front end, and backend (?) in Rust. This is becoming an alternative to Electron
using the system webview. But again, you are in Javascript land - not running directly
on the OS. This is another abstraction.


## Dear Imgui

You can use [Dear Imgui](https://github.com/ocornut/imgui) for immediate C++ GUI.
This is a very simple UI to integrate into an existing system. It is native,
and very performant - but the toolkit is limited, and making a proper desktop
app is not trivial (BUT! There are some very impressive applications written in
it!).

The toolkit provided is very limited, and does not look native. Doing layouts
or using docks is not standard (the docks branch is stable, but not the default).

Localization, and internazionalisation is not trivial.

Complex text layout? Screen readers? Input methods? This is not something
this library can fix at this moment.


## Use Qt with Widgets or QML.

If you want "the best" C++ toolkit available - that would be [Qt](https://www.qt.io/).
Period. It is everything you need and can be used in other languages as
well (lots of Python code uses Qt). The disadvantage is a very large distribution
binary. It is difficult to properly deploy in an installer
([I know, I have experience with it](https://github.com/codepointerapp/codepointer/blob/95c46522c05f0a08badd87f7c5062e6eec18018f/.github/workflows/build.yml#L121)).

Another problem with Qt - is that the "widgets" part is considered "done". No real
development is going there. The vast majority of the development effort is on the
QML site. Also, as a very "experienced" library, it started when STL was not a thing
and it contains another container library.

This is one of my personal peeves with it: it tries to do everything for its own.
You want an INI file loader? we got an implementation. Painters? Cool, we got
our own. QRichTextWidget for exmaple uses its own rendering engine for its
minimal HTML (and you have WebView as well).

I also found myself writing very basic widgets, which I assume they should provide
in 2026. And I am still have bugs related to DPI, and look inside GNome or Windows11
is not ideal.


## SlintUI

A new alternative I see - is [slint](https://slint.dev/). It seems to be Qt, without
QWidget, purely QML. A good rust support, and C++ native. UI code is written
in a DSL, not in C++.

I am not a fan of another language for the UI. Also, this still uses JavaScript
which is another huge dependency. Might be OK for you - but not what I consider
native.

## SVision 3

This new toolkit is trying to think: "what if QtWidgets was done from scratch using
modern C++". We could re-use a lot of 3rd parties instead of re-writing all from
scratch (see https://en.wikipedia.org/wiki/Not_invented_here).

Some of the ideas that are in the design of SVision3:

- Do not abuse inheritance. Qt has QWidget -> QPushButton -> QCheckbox/QButton.
  In SVision3 snstead, functionality needed by several classes is moved to a
  new class (see ButtonState). This re-uses behaviour in several widgets. See also
  https://en.wikipedia.org/wiki/Composition_over_inheritance .
- We have a large ecosystem of 3rd parties. We can use [toml++](https://marzer.github.io/tomlplusplus/)
  for parsing INI/Toml files, or use [litehtml](https://github.com/litehtml/litehtml/)
  and [md4c](https://github.com/mity/md4c) to display markdown in a widget. For logging
  we can use [spdlog](https://github.com/gabime/spdlog) which gives us for free
  also [fmt](https://github.com/fmtlib/fmt).
- Unlike Qt, which uses its painter, SVision3 abstract the platfomr's native painter
  (GDI+, Cocoa or Cairo) in a very thin way, so in generated code actually uses
  the platform's drawing routines.
- We can use [catch2](https://github.com/catchorg/Catch2) as internal unit test
  framework.


All these ideas free the toolkit's developers from doing anything not related to
the toolkit itself (no unit test framwork, build system).

Some other things that make this toolkit better:

- We use UTF-8 everywhere. We have an iterator for reading it, as just iteragin over
  the char vectos will fail.
- We have themes that emulate the look and feel of the host platform. Ideally - a
  user of this library, will not know how its built - it will look "in home".
- CSD as first class citizen. Window decorations are normal widgets and layouts
  you can just hook into them - and inject a normal widget.
- We do use the platform's image loaders. On Windows and macOS - the platform provide
  very good APIs. No need to re-bundle libpng or libjpeg.
- We do learn from Qt experience - and subsystems are abstracted. Platform windowing
  is chosen on runtime (Windows and macOS have a single one, but Linux has X11 and Wayland)
  each providing its own painter, and rasterizer. (not unlike [fltk](https://www.fltk.org/)).
- We also let developers choose the painter, or rasterizer at compile time - so you
  can provide your own backend for creating windows, painting or load images.
- We have i18n. The difference from Qt/GTK is that our translation system
  creates classes containing the translation, which are compiled into the binary
  itseld, instead of data parsed at runtime (but still - PO reading at runtime
  is supported).
- The MVC system Qt uses was the inspiration for the system used in SVision3.
- **0FPS**. Unlike toolkits like [slint](https://slint.dev/) which has a moto of "we can
  draw 60 frames per second" - we aim at the exact oposite. We don't draw if possible.
  In static UIs (lets be honest, applications sit idle in ideal mode). No drawing
  is done at all. Same for Dear Imgui - which redraws constantly.
- We use conan for distributing the library.
- We also provide a demo git repo,
  which you can clone and continue working on your own repo. This already
  contians github/gitlab actions to build your application - reducing fraction,
  so you can focus on develping software, not on packaging for 3-4 platforms.

So yes. Another toolkit. I think I can do better, with less code and smaller footprint.
