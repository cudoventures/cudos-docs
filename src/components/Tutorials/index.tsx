import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const Tutorials = [
  {
    name: 'Chat completions',
    url: '../../../asi-cloud/inference/tutorials/chat-completions',
    description: (
      <p>Learn how to maintain context for chatbot-like interactions, how to receive tokens as they are generated, and more.</p>
    ),
  },
  {
    name: 'Structured JSON output',
    url: '../../../asi-cloud/inference/tutorials/structured-output',
    description: (
      <p>Useful for apps where you want predictable, structured data.</p>
    ),
  },
];
interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function TutorialsCard({name, url, description}: Props) {
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

export function TutorialsCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Tutorials.map((tutorial) => (
        <TutorialsCard key={tutorial.name} {...tutorial} />
      ))}
    </div>
  );
}