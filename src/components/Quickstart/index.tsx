import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const Quickstarts = [
  {
    name: '1. Smart Contracts 📝',
    url: '../../../docs/build/smart-contracts/contract-deployment',
    description: (
      <p>Learn to write and deploy Smart Contracts on the CUDOS Blockchain to implement the business and value logic of your application.</p>
    ),
  },
  {
    name: '2. Cloud Infrastructure ⛅',
    url: '../../../docs/cudos-intercloud/introduction/overview',
    description: (
      <p>Learn to spin up cloud infrastructure via CUDOS Intercloud (CIC) to power your applications with computing resources.</p>
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