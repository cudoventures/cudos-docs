import React from 'react';
import Link from '@docusaurus/Link';

type DocLink = {label: string; to: string};
type SiteLink = {label: string; href: string; icon: JSX.Element};

const docGroups: {label: string; links: DocLink[]}[] = [
  {
    label: 'Serverless Inference',
    links: [
      {label: 'Quickstart', to: '/docs/asi-cloud/inference/quickstart'},
      {label: 'Speech', to: '/docs/asi-cloud/inference/speech'},
      {label: 'Tutorials', to: '/docs/asi-cloud/inference/tutorials/tutorials-overview'},
      {label: 'Streaming', to: '/docs/asi-cloud/inference/tutorials/tutorials-overview'},
      {label: 'Tool calling', to: '/docs/asi-cloud/inference/tutorials/tutorials-overview'},
    ],
  },
  {
    label: 'Deploy Infrastructure',
    links: [
      {label: 'Creating an SSH key', to: '/docs/asi-cloud/usage/creating-an-ssh-key'},
      {label: 'Creating a virtual machine', to: '/docs/asi-cloud/usage/via-user-interface/creating-a-virtual-machine'},
      {label: 'Viewing your machines', to: '/docs/asi-cloud/usage/via-user-interface/viewing-your-machines'},
      {label: 'CLI', to: '/docs/asi-cloud/usage/interact-via-cli'},
    ],
  },
  {
    label: 'Account & Billing',
    links: [
      {label: 'Your account', to: '/docs/asi-cloud/profile/profile-overview'},
      {label: 'Adding balance', to: '/docs/asi-cloud/usage/via-user-interface/payments'},
      {label: 'Referral system', to: '/docs/asi-cloud/referral-system'},
      {label: 'Discounts & bonuses', to: '/docs/asi-cloud/discounts-and-bonuses'},
    ],
  },
];

const ArrowRight = (
  <svg className="welcome-pill__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const ArrowUpRight = (
  <svg className="welcome-pill__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const iconProps = {
  className: 'welcome-pill__icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const DashboardIcon = (
  <svg {...iconProps}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const CudoComputeIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01A1.65 1.65 0 0 0 9 4.6V4.5a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V11a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const CudosIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 7v3" />
    <path d="m11 13-5 4" />
    <path d="m13 13 5 4" />
  </svg>
);

const DiscordIcon = (
  <svg {...iconProps}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const TelegramIcon = (
  <svg {...iconProps}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const XIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
  </svg>
);

const GithubIcon = (
  <svg {...iconProps}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const siteLinks: SiteLink[] = [
  {label: 'ASI:Cloud Dashboard', href: 'https://asicloud.cudos.org', icon: DashboardIcon},
  {label: 'CUDO Compute', href: 'https://www.cudocompute.com/', icon: CudoComputeIcon},
  {label: 'CUDOS', href: 'https://www.cudos.org', icon: CudosIcon},
  {label: 'Discord', href: 'https://discord.com/invite/cudos', icon: DiscordIcon},
  {label: 'Telegram', href: 'https://t.me/cudostelegram', icon: TelegramIcon},
  {label: 'X (Twitter)', href: 'https://twitter.com/CUDOS_', icon: XIcon},
  {label: 'GitHub', href: 'https://github.com/CudoVentures', icon: GithubIcon},
];

export function DocLinks(): JSX.Element {
  return (
    <div className="welcome-menu">
      {docGroups.map((group) => (
        <div key={group.label} className="welcome-group">
          <p className="welcome-group__label">{group.label}</p>
          <div className="welcome-pill-row">
            {group.links.map((link) => (
              <Link key={link.label} className="welcome-pill" to={link.to}>
                <span className="welcome-pill__label">{link.label}</span>
                {ArrowRight}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SiteLinks(): JSX.Element {
  return (
    <div className="welcome-pill-row">
      {siteLinks.map((link) => (
        <Link key={link.href} className="welcome-pill" to={link.href}>
          {link.icon}
          <span className="welcome-pill__label">{link.label}</span>
          {ArrowUpRight}
        </Link>
      ))}
    </div>
  );
}
