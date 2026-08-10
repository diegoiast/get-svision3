# ItemModel

`#include "toolkit/item_model.hpp"`

The data-model interface behind [`ListView`](list_view.md),
[`TableView`](table_view.md), and [`IconGrid`](icon_grid.md). Rows are
addressed by index; cells by `(row, col)`.

## Example

```cpp
auto model = std::make_shared<toolkit::StringListModel>(
    std::vector<std::string>{"Alpha", "Beta", "Gamma"});
auto list = std::make_unique<toolkit::ListView>(model);
```

## Interface

```cpp
class ItemModel {
  public:
    virtual size_t row_count() const = 0;
    virtual size_t column_count() const { return 1; }
    virtual std::string cell_text(size_t row, size_t col) const = 0;
    virtual std::string header_text(size_t col) const { return {}; }
    virtual Icon icon_at(size_t row, size_t col, int size) const { return nullptr; }
    virtual std::string tooltip(size_t row) const { return cell_text(row, 0); }

    std::function<void()> on_data_changed;
};
```

Call `on_data_changed()` after mutating a model in place so bound views
refresh.

## Built-in implementations

| Class | Description |
|-------|-------------|
| `StringListModel` | Single-column model over `std::vector<std::string>`; `set_items()`, `append()`, `remove()` |
| `StringTableModel` | Multi-column model with headers over `vector<vector<string>>`; `set_data()`, `append_row()`, `remove_row()` |
| `StandardIconModel` | Model of `StandardIconItem{text, tooltip_text, icon_name, icon_category}`, for icon-grid style browsers; `set_items()`, `append()` |
| `FilterAdapter` | Wraps another `ItemModel` and exposes a filtered subset; `set_filter(std::string)`, `source_index(filtered_index)`, async rebuild with `on_progress` reporting and `set_simulated_delay_ms()` for testing |
