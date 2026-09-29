import React from 'react';
import Link from '@docusaurus/Link';

type Quickstart = {
  num: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  tag: string;
  tagVariant: 'inference' | 'compute';
  url: string;
};

const Quickstarts: Quickstart[] = [
  {
    num: '1',
    eyebrow: 'Managed API',
    title: 'Inference service',
    description: 'Token-based inference service running on industry leading ASI infrastructure.',
    bullets: [
      'No infrastructure to manage',
      'Pay per million tokens',
      'OpenAI-compatible API',
    ],
    tag: 'Inference',
    tagVariant: 'inference',
    url: '/docs/asi-cloud/inference/quickstart',
  },
  {
    num: '2',
    eyebrow: 'Raw compute',
    title: 'Deploy infrastructure',
    description: 'Deploy high-performance cloud GPUs on-demand and at scale for AI, machine learning, web3 dapps and more.',
    bullets: [
      'NVIDIA GPUs on demand',
      'Private networks & templates',
      'Hourly billing',
    ],
    tag: 'Compute',
    tagVariant: 'compute',
    url: '/docs/asi-cloud/usage/via-user-interface/creating-a-virtual-machine',
  },
];

const ArrowRight = (
  <svg className="quickstart-card__cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

function QuickstartCard({num, eyebrow, title, description, bullets, tag, tagVariant, url}: Quickstart) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <Link className="quickstart-card" to={url}>
        <div className="quickstart-card__head">
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className="quickstart-card__num">{num}</div>
            <span className="quickstart-card__eyebrow">{eyebrow}</span>
          </div>
          <span className={`quickstart-card__tag quickstart-card__tag--${tagVariant}`}>{tag}</span>
        </div>
        <div className="quickstart-card__title">{title}</div>
        <p className="quickstart-card__desc">{description}</p>
        <ul className="quickstart-card__bullets">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <span className="quickstart-card__cta">
          Jump right in
          {ArrowRight}
        </span>
      </Link>
    </div>
  );
}

export function QuickstartCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Quickstarts.map((quickstart) => (
        <QuickstartCard key={quickstart.num} {...quickstart} />
      ))}
    </div>
  );
}
