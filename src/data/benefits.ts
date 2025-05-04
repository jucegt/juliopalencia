import {
  Eye,
  LifeBuoy,
  Mail,
  Palette,
  Rocket,
  ShieldCheck,
  TabletSmartphone,
  Wrench
} from '@lucide/svelte';

const benefits = [
  {
    id: 1,
    class: 'lg:row-span-2',
    icon: Wrench,
    title: 'No tech stress',
    description:
      'Just tell me about your business, that’s it. I’ll handle all the tech stuff, no jargon, no hassle.',
    footer: 'Yes, even if websites are not your thing.',
    illustration: 'illustration-stress',
    button: {
      icon: Mail,
      text: 'Let’s talk about your website'
    }
  },
  {
    id: 2,
    icon: Rocket,
    title: 'Fast and simple',
    description: 'Your site can be live in just a few days. No long processes, no stress.',
    footer: 'You’ll be up and running before you know it.'
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'Safe and reliable',
    description:
      'I use modern tools to keep your site and content secure, and make sure everything runs smoothly.',
    footer: 'Your site is in good hands.'
  },
  {
    id: 4,
    icon: TabletSmartphone,
    class: 'lg:col-start-2',
    title: 'Looks good',
    description: 'Your website will look amazing on any screen, phone, tablet or desktop.',
    footer: 'Your customers will love the experience.'
  },
  {
    id: 5,
    icon: Palette,
    class: 'lg:col-start-3 lg:row-span-2',
    title: 'Made for you',
    description:
      'No cookie-cutter templates. Your site will be fully custom, built to reflect your business vibe.',
    footer: 'It’s yours, and it shows.',
    illustration: 'illustration-foryou',
    button: {
      icon: Eye,
      text: 'See what I can design for you'
    }
  },
  {
    id: 6,
    icon: LifeBuoy,
    class: 'lg:col-span-2 lg:row-start-3',
    layout: 'horizontal',
    title: 'Support after launch',
    description:
      'Need an update? I’m here to help. You won’t be left alone after your site goes live.',
    footer: 'Let’s talk whenever you need.',
    illustration: 'illustration-support',
    button: {
      icon: LifeBuoy,
      text: 'Need help later? Message me'
    }
  }
];

export default benefits;
