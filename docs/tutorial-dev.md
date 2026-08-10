# Developer Tutorial

This documentation assume you want to contribute to the development of SVision3.
If you just want to use it, visit [the user
tutorial](tutorial).

If you are just a user, you can ignore this page, and see the [api design documentation](api).

## 1. Install dependencies with Conan

From the repository root:

<Tabs>
<TabItem value="linux" label="Pre-setup on Linux)">
- A C++20 compiler (GCC, Clang, or MSVC)
- [CMake](https://cmake.org/) and [Conan 2](https://conan.io/)
- On Linux, `harfbuzz` and `freetype` installed via your system package
  manager (required on every distro, regardless of windowing backend)

```bash
conan install --build=missing
```
</TabItem>
<TabItem value="vs" label="Visual Studio (Windows)">

MS Visual Studio 2022 is actively tested, but 2026 should work as well.
No other setup is needed.

```bash
conan install --build=missing
```
</TabItem>
<TabItem value="mac" label="macOS">

This platform is untested, feel free to report its status.
```bash
conan install --build=missing
```

</TabItem>
</Tabs>

## 2. Configure and build

<Tabs>
<TabItem value="ninja" label="Ninja / Make (Linux, macOS)">

```bash
cmake --preset conan-debug
cmake --build build/Debug
```

</TabItem>
<TabItem value="vs" label="Visual Studio (Windows)">

You could use the command line:
```bash
cmake --preset conan-default
cmake --build --preset conan-Debug\\
```

Or open Visual Studio, and point it to the directory of your clone. Pressing F5
should bring up the demo of this library.

</TabItem>
</Tabs>

## 3. Create a branch and submit a PR

Once you got your fix, or new feature - you should create locally a new branch
and push it to your repo. Then - create a PR from your repo.

## Next steps

Browse the [widget and module reference](widgets.md) to see everything
available — layouts, widgets, charts, theming, and more.
