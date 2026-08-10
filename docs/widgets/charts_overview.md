# Charts overview

`#include <toolkit/charts/chart_interaction.hpp>` (shared by every chart widget below)

All chart widgets (`LineChart`, `BarChart`, `StackedBarChart`, `AreaChart`,
`PieChart`, `ScatterPlot`, `Histogram`, `CandlestickChart`) are `Widget`
subclasses that own their own data (via `add_series()`/`set_slices()`
etc.) and render axes, grid, legend, and hover tooltips themselves — there
is no separate "chart view + model" split like the item/tree/table views
use.

## Common shape

Most chart classes share the same small vocabulary:

| Member | Description |
|--------|-------------|
| `add_series(Series)` / `clear_series()` / `series_count()` | Add and manage data series (`PieChart` uses `set_slices()`/`clear()` instead) |
| `set_title(std::string)` | Chart title |
| `set_x_label(std::string)` / `set_y_label(std::string)` | Axis labels |
| `set_show_grid(bool)` / `set_show_legend(bool)` | Toggle chrome |
| `on_hover` — `std::function<void(size_t series_idx, size_t point_idx)>` | Fired as the pointer moves over a data point/bar/candle |

Each series struct carries its own `Color` (or `line_color`/`fill_color`,
or `up_color`/`down_color` for candlesticks), so per-series styling is set
at data-population time rather than through separate style setters.

## Pan & zoom — ChartInteraction

Line, bar, stacked-bar, area, scatter, histogram, and candlestick charts
embed a `ChartInteraction` to support scroll-to-zoom and drag-to-pan over
the data range; `PieChart` does not use it. It's driven internally by each
chart's `handle_mouse()` — you generally don't touch it directly, but it's
useful to know it exists if you're debugging pan/zoom behavior or
extending a chart:

```cpp
struct ChartInteraction {
    void set_data_range(float dx_min, float dx_max, float dy_min, float dy_max);
    bool handle_scroll(float mx, float my, float scroll_dy, bool shift_held,
                       float plot_x, float plot_w, float plot_y, float plot_h);
    bool handle_press(float mx, float my);
    bool handle_drag(float mx, float my, float plot_x, float plot_w, float plot_y, float plot_h);
    bool handle_release();
    void reset_zoom();
    bool is_zoomed() const;
};
```

## Pages

- [LineChart](line_chart.md)
- [BarChart](bar_chart.md)
- [StackedBarChart](stacked_bar_chart.md)
- [AreaChart](area_chart.md)
- [PieChart](pie_chart.md)
- [ScatterPlot](scatter_plot.md)
- [Histogram](histogram.md)
- [CandlestickChart](candlestick_chart.md)
