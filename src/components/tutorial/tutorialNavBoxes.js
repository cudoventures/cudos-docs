import React from 'react';
import clsx from 'clsx';
import styles from './tutorialNavBoxes.module.css';


const FeatureList = [
  {
    title: 'Build a Counter with Cudos Blast',
    icon: '../img/nft.svg',
    items: [
      {url: "../docs.cudos.org/docs/build/tutorials/counter/create-counter", text: "Get Started"},
    ]
  },
  {
    title: 'Build a simple poll',
    icon: '../img/rocket.png',
    items: [
      {
      url: "../docs/build/tutorials/simple-poll/build-poll", 
      text: "Get Started",
    },
    ]
  },
  {
    title: 'Build a messaging dApp',
    icon: '../img/messaging.svg',
    items: [
      {url: "../docs.cudos.org/docs/build/tutorials/messaging/create-messaging", text: "Get Started"},
    ]
  },
  {
    title: 'Build a Counter with Cudos Blast',
    icon: '../img/nft.svg',
    items: [
      {url: "../docs.cudos.org/docs/build/tutorials/counter/create-counter", text: "Get Started"},
    ]
  },
 
];

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}


function Feature({title, icon, items }) {
  return (
    <article>
      <div className={styles.homecard}>
        <img src={icon} className={styles.homeIcon}></img>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.listContainer}>
        <ul>
          {items.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </ul>
        </div>
      </div>
      
    </article>
  );
}

export default function TutorialFeatures() {
  return (
    <section>
      <ul className={styles.container2}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
    </section>
  );
}
