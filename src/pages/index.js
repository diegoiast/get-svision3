import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const heroImage = useBaseUrl('/img/hero.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/tutorial">
            Get Started using the library
          </Link>
          <Link className="button button--primary button--lg" to="/docs/tutorial-dev">
            Get Started developing
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/widgets">
            Widgets & Modules
          </Link>
        </div>
        <img
          className={styles.heroImage}
          src={heroImage}
          alt="SVision3 demo application"
        />
      </div>
    </header>
  );
}

function ApiDesign() {
  return (
    <section className={styles.apiDesign}>
      <div className="container">
        <Heading as="h2">API design</Heading>
        <ul>
          <li>
            All memory is guarded by smart pointers — you create with{' '}
            <code>std::make_shared</code> and get references to widgets with{' '}
            <code>std::weak_ptr</code>.
          </li>
          <li>
            Every widget has a <code>get_...()</code> that returns a value and a{' '}
            <code>set_...()</code> that returns a reference, so calls chain.
          </li>
          <li>
            Events are callback-based, with a <code>std::function</code> member you
            can also override via the widget's <code>handle_...()</code> method.
          </li>
          <li>UTF-8 native, with a UTF-8 iterator class.</li>
          <li>
            Command-based API — build a <code>Command</code> once and attach it to a
            toolbar, menu, or button; all three trigger the same callback.
          </li>
          <li>Widgets draw through a theme, so changing the theme changes every widget's display.</li>
          <li>Painting goes through a thin platform-abstraction <code>Painter</code> class.</li>
          <li>
            Text rendering and image loading are similarly abstracted — opt out of
            the defaults and plug in your own image loader, platform backend, or
            text rasterizer.
          </li>
          <li>A fluent/declarative API is available on top of the base widget API — see the <Link to="/docs/declarative">Declarative API</Link> guide.</li>
        </ul>
      </div>
    </section>
  );
}

function PlatformMatrix() {
  return (
    <section className={styles.platformMatrix}>
      <div className="container">
        <Heading as="h2">Platform matrix</Heading>
        <p>
          Every platform draws natively by default; an OpenGL 2.1 backend is also
          available (still a work in progress, since it depends on native APIs).
        </p>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Windowing</th>
              <th>Rendering backend</th>
              <th>Selection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>macOS</td>
              <td>Cocoa/AppKit</td>
              <td>CoreGraphics (default) or OpenGL 2.1</td>
              <td><code>SVISION_PAINT=opengl</code></td>
            </tr>
            <tr>
              <td>Windows</td>
              <td>Win32</td>
              <td>GDI+ (default) or OpenGL 2.1</td>
              <td><code>SVISION_PAINT=opengl</code></td>
            </tr>
            <tr>
              <td>Linux</td>
              <td>X11 / Wayland</td>
              <td>Cairo (default) or OpenGL 2.1</td>
              <td><code>SVISION_PAINT=cairo</code> / <code>SVISION_PAINT=opengl</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A C++20 GUI toolkit for macOS, Windows, and Linux. ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ApiDesign />
        <PlatformMatrix />
      </main>
    </Layout>
  );
}
