import { CircleHelp, Clock, DollarSign, Send, SquarePen, Star } from '@lucide/svelte';

const faq = {
  en: [
    {
      id: 1,
      icon: DollarSign,
      question: 'How much does a website cost?',
      answer:
        'Starting at <strong>US$465</strong>. The final price depends on the type of site, content, and features you need (forms, WhatsApp, animations, etc.). <strong>You’ll always know the price before we begin.</strong>'
    },
    {
      id: 2,
      icon: Clock,
      question: 'How long does it take?',
      answer:
        'Typically between <strong>1 to 2 weeks</strong>, depending on the scope. If you already have your content ready (text and images), <strong>things move much faster</strong>.'
    },
    {
      id: 3,
      icon: CircleHelp,
      question: 'Do I need to know anything about tech?',
      answer:
        '<strong>Not at all.</strong> Just tell me what you need and I’ll handle the rest. Everything is explained in a clear, <strong>simple way › no jargon</strong>.'
    },
    {
      id: 4,
      icon: SquarePen,
      question: 'Can I update my website later on?',
      answer:
        '<strong>Yes.</strong> You can request changes anytime. I also offer a <strong>maintenance plan</strong> so you don’t have to worry about the technical side.'
    },
    {
      id: 5,
      icon: Send,
      question: 'Can my site send messages via WhatsApp?',
      answer:
        '<strong>Absolutely.</strong> Your site can include a WhatsApp button or even send automated messages after a form or order.'
    },
    {
      id: 6,
      icon: Star,
      question: 'What do I need to get started?',
      answer:
        '<strong>Just a clear idea</strong> of what you want to achieve. I’ll help with the rest › structure, design, content, and even the domain if needed.'
    }
  ],
  es: [
    {
      id: 1,
      icon: DollarSign,
      question: '¿Cuánto cuesta un sitio web?',
      answer:
        'Desde <strong>GTQ 3,500.00</strong>. El precio varía según el tipo de sitio, el contenido y las funcionalidades que necesites (por ejemplo: formularios, WhatsApp, animaciones, etc.). <strong>Siempre conocerás el costo antes de comenzar.</strong>'
    },
    {
      id: 2,
      icon: Clock,
      question: '¿Cuánto tiempo toma?',
      answer:
        'En promedio, entre <strong>1 y 2 semanas</strong>, dependiendo del alcance.  ya tienes el contenido listo (textos e imágenes), <strong>será mucho más rápido</strong>.'
    },
    {
      id: 3,
      icon: CircleHelp,
      question: '¿Necesito saber de tecnología?',
      answer:
        '<strong>No es necesario.</strong> Solo cuéntame qué necesitas y yo me encargo del resto. Te explico todo con claridad, <strong>sin tecnicismos</strong>.'
    },
    {
      id: 4,
      icon: SquarePen,
      question: '¿Puedo actualizar mi sitio después?',
      answer:
        '<strong>Sí</strong>, puedes pedirme cambios cuando los necesites. También ofrezco <strong>un plan de mantenimiento</strong> para que no tengas que preocuparte por la parte técnica.'
    },
    {
      id: 5,
      icon: Send,
      question: '¿Puedo recibir mensajes por WhatsApp desde mi sitio?',
      answer:
        '<strong>Por supuesto.</strong> El sitio puede tener un botón directo a WhatsApp o incluso enviar respuestas automáticas después de un pedido o consulta.'
    },
    {
      id: 6,
      icon: Star,
      question: '¿Qué necesito para empezar?',
      answer:
        '<strong>Solo una idea clara</strong> de lo que quieres lograr. Yo te ayudo con lo demás: estructura, diseño, textos e incluso el dominio si lo necesitas.'
    }
  ]
};

export default faq;
