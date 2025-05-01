import {
  BotMessageSquare,
  CalendarCheck,
  CircleEllipsis,
  ClipboardList,
  Eye,
  FileText,
  Hammer,
  HelpCircle,
  Speech,
  Wrench
} from '@lucide/svelte';

const services = {
  en: [
    {
      variant: 'recommended' as 'recommended',
      name: 'Business Website',
      description:
        'A clear and modern website designed just for your business › no templates, no tech stress.',
      price: 465,
      text: 'Let more people find you',
      list: [
        'Custom design',
        'Works on phones and computers',
        'WhatsApp or contact form',
        'Search-friendly'
      ],
      buttons: {
        primary: {
          text: 'I want my site',
          icon: Wrench,
          href: '#contact'
        },
        secondary: {
          text: 'Request a quote',
          icon: FileText,
          href: '#contact'
        }
      }
    },
    {
      name: 'Promotional Page',
      description:
        'A one-page website to highlight your offer and make it easy for customers to take action.',
      price: 325,
      text: 'Perfect for offers or new products',
      list: ['Eye-catching design', 'WhatsApp or checkout button', 'Mobile-friendly and fast'],
      buttons: {
        primary: {
          text: 'Let’s build one',
          icon: Hammer,
          href: '#contact'
        },
        secondary: {
          text: 'Ask first',
          icon: HelpCircle,
          href: '#contact'
        }
      }
    },
    {
      name: 'Website Maintenance Plan',
      description:
        'I keep your site updated, backed up and running smoothly, while you focus on your business.',
      price: 40,
      priceSuffix: '/month',
      text: 'I take care of it, so you don’t have to',
      list: ['Small edits or updates', 'Monthly checkups', 'Backups', 'Quick response'],
      buttons: {
        primary: {
          text: 'Start plan',
          icon: ClipboardList,
          href: '#contact'
        },
        secondary: {
          text: 'Get info',
          icon: CircleEllipsis,
          href: '#contact'
        }
      }
    },
    {
      name: 'Digital Guidance',
      description:
        'Let’s talk and I’ll tell you what makes the most sense for your business › no tech talk.',
      price: 55,
      text: 'Not sure where to start? I’ll help you',
      list: [
        '1:1 video call',
        'Simple, honest advice',
        'Action plan made for you',
        'Recap in writing'
      ],
      buttons: {
        primary: {
          text: 'Book a session',
          icon: CalendarCheck,
          href: '#contact'
        },
        secondary: {
          text: 'Let’s chat first',
          icon: Speech,
          href: '#contact'
        }
      }
    },
    {
      name: 'WhatsApp Automation',
      description:
        'Want your website to automatically send WhatsApp messages? Whether it’s after an order, question, or signup › your client gets a helpful reply, without you needing to do anything in real time.',
      price: 150,
      text: 'Your business replies › even when you’re offline',
      list: [
        'Integrated with your site or form',
        'Personalized messages with interactive buttons',
        'Setup and testing',
        'Simple walkthrough so you’re in control'
      ],
      buttons: {
        primary: {
          text: 'Automate now',
          icon: BotMessageSquare,
          href: '#contact'
        },
        secondary: {
          text: 'See it live',
          icon: Eye,
          href: '#contact'
        }
      }
    }
  ],
  es: [
    {
      variant: 'recommended' as 'recommended',
      name: 'Sitio web para tu negocio',
      description:
        'Te creo un sitio claro, moderno y fácil de usar, hecho especialmente para tu negocio.',
      price: 3500,
      text: 'Haz que más personas te encuentren',
      list: [
        'Diseño personalizado',
        'Funciona bien en celular y computadora',
        'Botón de WhatsApp o formulario',
        'Se encuentra fácil en Google'
      ],
      buttons: {
        primary: {
          text: 'Quiero mi sitio',
          icon: Wrench,
          href: '#contact'
        },
        secondary: {
          text: 'Pedir cotización',
          icon: FileText,
          href: '#contact'
        }
      }
    },
    {
      name: 'Página para promociones',
      description: 'Una sola página diseñada para destacar tu oferta y convencer a tus clientes.',
      price: 2500,
      text: 'Ideal si querés vender algo rápido',
      list: ['Diseño llamativo', 'Enlace a WhatsApp o compra', 'Rápida y adaptada a celular'],
      buttons: {
        primary: {
          text: 'Quiero una',
          icon: Hammer,
          href: '#contact'
        },
        secondary: {
          text: 'Hablemos primero',
          icon: HelpCircle,
          href: '#contact'
        }
      }
    },
    {
      name: 'Cuidado mensual de tu sitio',
      description:
        'Actualizo, reviso y mantengo tu sitio en orden. Vos seguís con tu negocio, sin preocuparte.',
      price: 325,
      priceSuffix: '/mes',
      text: 'Yo me encargo de que todo funcione',
      list: ['Cambios pequeños', 'Revisión mensual', 'Copia de respaldo', 'Atención rápida'],
      buttons: {
        primary: {
          text: 'Quiero el plan',
          icon: ClipboardList,
          href: '#contact'
        },
        secondary: {
          text: 'Más info',
          icon: CircleEllipsis,
          href: '#contact'
        }
      }
    },
    {
      name: 'Asesoría para estar en internet',
      description:
        'Hablamos y te recomiendo lo mejor según tu negocio. Sin palabras raras, directo y claro.',
      price: 450,
      text: '¿No sabés por dónde empezar? Yo te guío',
      list: [
        'Videollamada 1:1',
        'Análisis de tu caso',
        'Ideas concretas y fáciles',
        'Resumen por escrito'
      ],
      buttons: {
        primary: {
          text: 'Agendar llamada',
          icon: CalendarCheck,
          href: '#contact'
        },
        secondary: {
          text: '¿Dudas? Escribime',
          icon: Speech,
          href: '#contact'
        }
      }
    },
    {
      name: 'Automatización con WhatsApp',
      description:
        '¿Querés que tu sitio web envíe mensajes por WhatsApp automáticamente? Ya sea después de un pedido, consulta o registro, tus clientes reciben una respuesta clara y útil › sin que tengas que estar pendiente.',
      price: 1200,
      text: 'Tu negocio responde solo, estés o no conectado',
      list: [
        'Conexión con tu sitio o formulario',
        'Mensajes personalizados con botones interactivos',
        'Configuración y pruebas',
        'Instrucciones fáciles para que lo uses sin complicaciones'
      ],
      buttons: {
        primary: {
          text: 'Quiero automatizar',
          icon: BotMessageSquare,
          href: '#contact'
        },
        secondary: {
          text: 'Ver cómo funciona',
          icon: Eye,
          href: '#contact'
        }
      }
    }
  ]
};

export default services;
