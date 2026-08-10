---
slug: welcome
title: Welcome to the SVision3 site
authors: [diegoiast]
tags: [announcement]
---

I am not new to GUI toolkits. My first one (svision) - was written in TP7,
emulating the API of TurboVision, but in a graphical system. I wrote the 2nd one
a few years later - called [svision2](https://github.com/diegoiast/svision2).

This is the 3rd iteration. It is much more mature try to build a production
ready cross platform GUI in pure C++.

This is a very exciting time to be writing C++ code, with C++26 comming to life
and bringing exciting featuress like compile time reflection. We have the best
tools for helping develop (thinkgs like `clang-format` or `clang-tidy`). Sites
like https://github.com or https:://gitlab.com that help spread code. New build
sysetems like [vcpkg](https://vcpkg.io/en/) or [connan](https://conan.io/).


{/* truncate */}

## What's here today

- **[Tutorial](/docs/tutorial)** — build the toolkit and get a window with
  a label and a button on screen.
- **[Demos](/docs/demos)** —  demos of the available code.
- **[Declarative API](/docs/declarative)** — the `ui::` fluent wrapper used
  throughout `demo_declarative.cpp`.
- **[Widgets & Modules](/docs/widgets)** — every widget class, grouped by
  category, each with its constructor, API table, callbacks, and a themed
  screenshot gallery.

This blog will track notable changes to the toolkit and to the docs
themselves as both evolve.
