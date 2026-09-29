import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function WelcomeHero(): JSX.Element {
  const bg = useBaseUrl('/img/welcome-hero-bg.png');
  return (
    <div className="welcome-hero" style={{backgroundImage: `url(${bg})`}}>
      <div className="welcome-hero__inner">
        <span className="welcome-hero__badge">ASI:Cloud Docs</span>
        <h1 className="welcome-hero__title">From idea to inference at scale.</h1>
        <p className="welcome-hero__body">
          ASI:Cloud is a high-performance cloud platform for inference and AI
          workloads. Token-based access to popular open models, plus NVIDIA GPUs
          on-demand. Start in minutes.
        </p>
        <Link className="welcome-hero__cta" to="/docs/asi-cloud/inference/quickstart">
          Select model &amp; get started
          <svg className="welcome-hero__cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
