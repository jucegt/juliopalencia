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

const benefits = {
  en: [
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
        text: 'Let’s talk',
        hidden: 'about your website'
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
        text: 'See what I can design',
        hidden: 'for you'
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
  ],
  es: [
    {
      id: 1,
      class: 'lg:row-span-2',
      icon: Wrench,
      title: 'Todo fácil para ti',
      description:
        'Me cuentas sobre tu negocio y listo. Yo me encargo de todo lo técnico, sin enredos ni términos raros.',
      footer: 'Sí, aunque no sepas nada de páginas web.',
      illustration: 'illustration-stress',
      button: {
        icon: Mail,
        text: 'Hablemos',
        hidden: 'de tu sitio web'
      }
    },
    {
      id: 2,
      icon: Rocket,
      title: 'Rápido y simple',
      description:
        'Tu sitio puede estar en línea en pocos días. Nada de procesos eternos ni complicaciones.',
      footer: 'Lo tienes más rápido de lo que crees.'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Protección total',
      description:
        'Uso herramientas modernas para proteger tu contenido y asegurar que todo funcione sin problemas.',
      footer: 'Tu sitio está en buenas manos.'
    },
    {
      id: 4,
      icon: TabletSmartphone,
      class: 'lg:col-start-2',
      title: 'Listo para todo',
      description:
        'Tu sitio se verá increíble desde cualquier dispositivo: celular, tablet o computadora.',
      footer: 'Tus clientes lo van a notar.'
    },
    {
      id: 5,
      icon: Palette,
      class: 'lg:col-start-3 lg:row-span-2',
      title: 'Diseñado para ti',
      description:
        'No uso plantillas genéricas. Tu sitio será único, pensado para reflejar tu estilo y tu negocio.',
      footer: 'Es tuyo, y se nota.',
      illustration: 'illustration-foryou',
      button: {
        icon: Eye,
        text: 'Mira lo que puedo crear',
        hidden: 'para ti'
      }
    },
    {
      id: 6,
      icon: LifeBuoy,
      class: 'lg:col-span-2 lg:row-start-3',
      layout: 'horizontal',
      title: 'Soporte después de publicar',
      description: '¿Necesitas un cambio? Aquí estaré. No te dejo solo después de lanzar tu sitio.',
      footer: 'Hablemos cuando quieras.',
      illustration: 'illustration-support',
      button: {
        icon: LifeBuoy,
        text: '¿Te surge algo después? Escríbeme',
        hidden: 'cuando quieras'
      }
    }
  ]
};

export default benefits;
