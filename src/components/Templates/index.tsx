import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const VMTemplates = [
  {
    name: 'Jupyter Hub',
    url: '/docs/cudos-intercloud/usage/via-user-interface/templates/jupyter-hub',
    description: (
      <p>Multi-user Jupyter Notebooks on CUDOS Intercloud.</p>
    ),
    image: '/img/jupyter-logo.svg',
  },
  {
    name: 'Jupyter Lab',
    url: '/docs/cudos-intercloud/usage/via-user-interface/templates/jupyter-lab',
    description: (
      <p>Jupyter Notebooks on CUDOS Intercloud.</p>
    ),
    image: '/img/jupyter-logo.svg',
  },
  {
    name: 'Ollama',
    url: '/docs/cudos-intercloud/usage/via-user-interface/templates/ollama',
    description: (
      <p>Ollama is the easiest way to deploy open source LLMs.</p>
    ),
    image: '/img/ollama-logo.png',
  },
  {
    name: 'OpenManus',
    url: '/docs/cudos-intercloud/usage/via-user-interface/templates/openmanus',
    description: (
      <p>OpenManus AI agent on CUDOS Intercloud.</p>
    ),
    image: '/img/openmanus-logo.jpg',
  },
  {
    name: 'VLLM',
    url: '/docs/cudos-intercloud/usage/via-user-interface/templates/vllm',
    description: (
      <p>VLLM is used to deploy open source LLMs for high performance.</p>
    ),
    image: '/img/vllm-logo.svg'
  },
  
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
  image?: string;
}

function TemplateCard({name, url, description, image}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
        {image && (
            <img
              src={image}
              
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain', 
                marginBottom: '1rem',
                borderRadius: '0.5rem',
                background: 'white',
                padding: '5px',
              }}
            />
          )}
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              Get Started!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TemplateCardsRow(): JSX.Element {
  return (
    <div className="row">
      {VMTemplates.map((template) => (
        <TemplateCard key={template.name} {...template} />
      ))}
    </div>
  );
}