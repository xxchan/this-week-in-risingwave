import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
    const atom = <Link target="_blank" href={useBaseUrl("/newsletter/atom.xml")}>Atom format</Link>;
    const rss = <Link target="_blank" href={useBaseUrl("/newsletter/rss.xml")}>RSS format</Link>;
    const rw = <Link href="https://github.com/risingwavelabs/risingwave">RisingWave</Link>;

    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container" style={{width: '52rem'}}>
                <h1 className="hero__title">Welcome</h1>
                <p>
                    This is the home of This Week in RisingWave, brining you news about the development of {rw}, a distributed SQL database for stream processing, and its open and inclusive community.
                </p>
                <p>
                    Click the "Browsing Issues" button below to see the most recent weekly issues.
                </p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/newsletter">
                        Browsing Issues
                    </Link>
                </div>
                <p>
                    You can also subscribe to feeds of this weekly in {atom} or {rss}.
                </p>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <HomepageHeader />
        </Layout>
    );
}
