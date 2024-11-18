import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const Quickstarts = [
  {
    name: '1. Cloud Infrastructure',
    url: '../../../docs/cudos-intercloud/introduction/overview',
    description: (
      <p>Deploy high-performance cloud GPUs on-demand and at scale for AI, machine learning, web3 dapps and more.</p>
    ),
  },
  {
    name: '2. ASI Merger',
    url: '../../../docs/asi-merge/asi-merge-intro',
    description: (
      <p>Navigate the CUDOS merger with ASI and find a guide to help you use your new FET tokens.</p>
    ),
  },
];
interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function QuickstartCard({name, url, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              Jump right in!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickstartCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Quickstarts.map((quickstart) => (
        <QuickstartCard key={quickstart.name} {...quickstart} />
      ))}
    </div>
  );
}