// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'tutorial',
    'tutorial-dev',
    'api',
    {
      type: 'category',
      label: 'Widgets & Modules',
      link: {type: 'doc', id: 'widgets'},
      items: [
        {
          type: 'category',
          label: 'Widgets',
          items: [
            'widgets/button',
            'widgets/button_group',
            'widgets/checkbox',
            'widgets/radio_button',
            'widgets/combobox',
            'widgets/icon_grid',
            'widgets/image_widget',
            'widgets/file_browser_widget',
            'widgets/label',
            'widgets/line_input',
            'widgets/text_edit',
            'widgets/progress_bar',
            'widgets/html_view',
            'widgets/rich_label',
            'widgets/slider',
            'widgets/spin_box',
            'widgets/status_bar',
            'widgets/toast_widget',
            'widgets/tab_widget',
            'widgets/table_view',
            'widgets/tree_view',
          ],
        },
        {
          type: 'category',
          label: 'Layouts',
          items: [
            'widgets/layout',
            'widgets/splitter',
          ],
        },
        {
          type: 'category',
          label: 'Containers & Navigation',
          items: [
            'widgets/scroll_area',
            'widgets/scrollable_widget',
            'widgets/scrollbar',
            'widgets/dock_area',
          ],
        },
        {
          type: 'category',
          label: 'Data & Views',
          items: [
            'widgets/item_model',
            'widgets/list_view',
            'widgets/file_tree_model',
          ],
        },
        {
          type: 'category',
          label: 'Menus, Toolbars & Commands',
          items: [
            'widgets/command',
            'widgets/menu',
            'widgets/menubar',
            'widgets/context_menu',
            'widgets/toolbar',
          ],
        },
        {
          type: 'category',
          label: 'Dialogs & System',
          items: [
            'widgets/file_dialog',
            'widgets/directory_dialog',
            'widgets/message_box',
            'widgets/tray_icon',
          ],
        },
        {
          type: 'category',
          label: 'Charts',
          link: {type: 'doc', id: 'widgets/charts_overview'},
          items: [
            'widgets/line_chart',
            'widgets/bar_chart',
            'widgets/stacked_bar_chart',
            'widgets/area_chart',
            'widgets/pie_chart',
            'widgets/scatter_plot',
            'widgets/histogram',
            'widgets/candlestick_chart',
          ],
        },
        'net',
      ],
    },
    'declarative',
    'demos',
  ],
};

export default sidebars;
