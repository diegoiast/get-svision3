import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// Makes <Tabs>/<TabItem> available in every .md/.mdx doc without a
// per-file import -- used by the tutorial's build-system tabs and every
// widget page's per-theme screenshot gallery.
export default {
  ...MDXComponents,
  Tabs,
  TabItem,
};
