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
          <Link className="button button--secondary button--lg" to="/docs/demos">
            See demos
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
        <PlatformMatrix />
      </main>
    </Layout>
  );
}
