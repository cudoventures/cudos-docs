/* import React from 'react';
import Layout from '@theme/Layout';

export default function Tutorial() {
  return (
    <Layout title="Tutorials" description="Tutorials Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/tutorial.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
} */


import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './video.module.css';
import TutorialNavBoxes from '../components/tutorial/tutorialNavBoxes';

import { Redirect } from '@docusaurus/router';

function TutorialHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Super fun tutorials</h1>
      </div>
    </header>
  );
}

export default function tutorial() {
  const { siteConfig } = useDocusaurusContext();

  // return <Redirect to="/docs/intro" />;
  return (
    <Layout
      title="Tutorials" description="Tutorials Page">
      <TutorialHeader />
      <main>
        <TutorialNavBoxes />
      </main>
    </Layout>
  );
}