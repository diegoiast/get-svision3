# FileTreeModel

`#include "toolkit/file_tree_model.hpp"`

A `TreeModel` implementation backed by the filesystem, for use with
[`TreeView`](tree_view.md). Supports lazy (on-expand) directory loading,
loaded on a background thread.

## Example

```cpp
auto model = std::make_shared<toolkit::FileTreeModel>("/home/user", /*lazy=*/true);
auto tree = std::make_unique<toolkit::TreeView>(model);
```

## Construction

```cpp
explicit FileTreeModel(std::string root_path, bool lazy = true);
```

## API

| Member | Description |
|--------|-------------|
| `set_root(std::string path)` | Change the root directory |
| `set_lazy(bool)` / `is_lazy()` | Load subdirectories only when expanded, vs. eagerly upfront |

## Callbacks

| Callback | Description |
|----------|-------------|
| `on_loading_started` — `std::function<void()>` | Fired when a background directory load begins |
| `on_loading_finished` — `std::function<void()>` | Fired when it completes |
