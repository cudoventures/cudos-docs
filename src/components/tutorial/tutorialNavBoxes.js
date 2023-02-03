import React from 'react';
import clsx from 'clsx';
import styles from './tutorialNavBoxes.module.css';


const FeatureList = [
  {
    title: 'Build a simple poll',
    icon: '../img/rocket.png',
    items: [
      {
      url: "/docs/build/tutorials/simple-poll/build-poll", 
      text: "Get Started",
    },
    ]
  },
  {
    title: 'Build a messaging dApp',
    icon: '../img/messaging.svg',
    items: [
      {url: "tutorials/messaging/create-messaging", text: "Get Started"},
    ]
  },
  {
    title: 'Build a Counter with Cudos Blast',
    icon: '../img/nft.svg',
    items: [
      {url: "../tutorials/counter/create-counter", text: "Get Started"},
    ]
  },
  {
    title: 'Build a dApp on CudoCompute',
    icon: '../img/nft.svg',
    items: [
      {url: "https://docs.cudos.org/docs/build/tutorials/compute-dapp", text: "Get Started"},
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


// import React from 'react';
// import clsx from 'clsx';
// import styles from './tutorialNavBoxes.module.css';


// const FeatureList = [
//   {
//     title: 'Build a simple poll',
//     icon: 'img/rocket.png',
//     items: [
//       {
//       url: "docs/build/tutorials/simple-poll/build-poll", 
//       text: "Get Started",
//     },
//     ]
//   },
//   {
//     title: 'Build a messaging dApp',
//     icon: 'img/messaging.svg',
//     items: [
//       {url: "docs/build/tutorials/messaging/create-messaging", text: "Get Started"},
//     ]
//   },
//   {
//     title: 'Build a Counter with Cudos Blast',
//     icon: 'img/nft.svg',
//     items: [
//       {url: "docs/build/tutorials/counter/create-counter", text: "Get Started"},
//     ]
//   },
//   /* {
//     title: 'Your profile',
//     icon: 'img/icons/your-profile.svg',
//     items: [
//       {url: "docs/your-profile/registration", text: "Registration"},
//       {url: "docs/your-profile/activity", text: "Activity"},
//       {url: "docs/your-profile/reading-history", text: "Reading history"},
//       {url: "docs/your-profile/weekly-goal", text: "Weekly Reading Goal"},
//       {url: "docs/your-profile/devcard", text: "DevCard"},
//       {url: "docs/your-profile/account-details", text: "Account details"},
//       {url: "docs/your-profile/deleting-your-profile", text: "Deleting your profile"},
//     ]
//   },
//   {
//     title: 'Customization',
//     icon: 'img/icons/customization.svg',
//     items: [
//       {url: "docs/customize-your-feed/layout", text: "Layout"},
//       {url: "docs/customize-your-feed/theme", text: "Theme"},
//       {url: "docs/customize-your-feed/density", text: "Density"},
//       {url: "docs/customize-your-feed/preferences", text: "Preferences"},
//     ]
//   },
//   {
//     title: 'Useful guides',
//     icon: 'img/icons/useful-guides.svg',
//     items: [
//       {url: "docs/how-does-daily-dev-work/dailydev-101", text: "What is daily.dev?​​​​"},
//       {url: "docs/how-does-daily-dev-work/how-to-get-featured", text: "How to get featured?"},
//       {url: "docs/how-does-daily-dev-work/reputation", text: "Reputation explained"},
//       {url: "docs/how-does-daily-dev-work/community-picks-submission-guidelines", text: "Community Picks Guidelines"},
//     ]
//   },
//   {
//     title: 'Integrations',
//     icon: 'img/icons/integration.svg',
//     items: [
//       {url: "docs/integrations/sharing-bookmarks", text: "Sharing bookmarks"},
//     ]
//   },
//   {
//     title: 'For content creators',
//     icon: 'img/icons/content-creator.svg',
//     items: [
//       {url: "docs/for-content-creators/content-guidelines", text: "Content guidelines"},
//       {url: "docs/for-content-creators/suggest-new-source", text: "How to suggest a new source"},
//       {url: "docs/for-content-creators/claiming-ownership-on-article", text: "Special features for creators"},
//     ]
//   },
//   {
//     title: 'For OSS contributors',
//     icon: 'img/icons/oss-contributors.svg',
//     items: [
//       {url: "docs/for-oss-contributors/how-to%20contribute-to-daily-dev", text: "How to contribute to daily.dev"},
//     ]
//   }, */
// ];

// function FeatureItem({url, text}){
//   return (
//     <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
//   );
// }


// function Feature({title, icon, items }) {
//   return (
//     <article className="col col--4">
//       <div className={styles.homecard}>
//         <img src={icon} className={styles.homeIcon}></img>
//         <h2>{title}</h2>
//         <div className={styles.listContainer}>
//         <ul>
//           {items.map((props, idx) => (
//             <FeatureItem key={idx} {...props} />
//           ))}
//         </ul>
//         </div>
//       </div>
      
//     </article>
//   );
// }

// export default function TutorialFeatures() {
//   return (
//     <section className={styles.features}>
//         <ul className={styles.grid3col}>
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </ul>
//     </section>
//   );
// }