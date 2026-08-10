import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Widgets & layouts',
    description: (
      <>
        Buttons, inputs, lists, trees, tables, tabs, docking, and
        <code>HBoxLayout</code>/<code>VBoxLayout</code> with margins,
        spacing, and stretch factors.
      </>
    ),
  },
  {
    title: 'Native look, every platform',
    description: (
      <>
        macOS, Windows, and Linux (Plasma) themes, each with light and dark
        color schemes, plus client-side decorations.
      </>
    ),
  },
  {
    title: 'Charts',
    description: (
      <>
        Line, bar, stacked bar, area, scatter, pie, histogram, and
        candlestick charts built in.
      </>
    ),
  },
  {
    title: 'Small binaries',
    description: (
      <>
        Native painters (GDI+ on Windows, CoreGraphics on macOS, Cairo on
        Linux) keep demos around 4.6&nbsp;MB stripped on Linux, 2.8&nbsp;MB
        on Windows.
      </>
    ),
  },
  {
    title: 'i18n & accessibility',
    description: (
      <>
        Gettext-style translation catalogs, bidi text layout, and keyboard
        navigation with mnemonics.
      </>
    ),
  },
  {
    title: 'Extras',
    description: (
      <>
        SQLite-backed models, an HTTP client, Markdown/HTML rendering via
        litehtml, and JSON UI serialization for dumping and reloading
        widget state.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('padding-horiz--md', styles.feature)}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
