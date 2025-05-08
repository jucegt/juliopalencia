type BuildWhatsappMessageParams = {
  name: string;
  phone: string;
  email: string;
  service:
    | 'business-website'
    | 'promotional-page'
    | 'website-maintenance-plan'
    | 'digital-guidance'
    | 'whatsapp-automation';
  message: string;
  lang?: 'es' | 'en';
};

export default function buildWhatsappMessage({
  name,
  phone,
  email,
  service,
  message,
  lang = 'es'
}: BuildWhatsappMessageParams) {
  const templates = {
    'business-website': {
      es: `Hola, soy *${name}* y me interesa crear un sitio web para mi negocio.

Podés escribirme al *${phone}* o a *${email}*.

${message}

Quedo atent@ a los pasos que siguen.`,

      en: `Hi, I’m *${name}* and I’m interested in building a website for my business.

You can reach me at *${phone}* or *${email}*.

${message}

Let me know what’s next.`
    },
    'promotional-page': {
      es: `Hola, soy *${name}* y me gustaría tener una landing page para una promoción.

Mi número es *${phone}* y mi correo es *${email}*.

${message}

Quedo atent@ a tus indicaciones.`,

      en: `Hi, I’m *${name}* and I’d like a landing page for a promotion.

My phone is *${phone}* and my email is *${email}*.

${message}

Let me know how we move forward.`
    },
    'website-maintenance-plan': {
      es: `Hola, soy *${name}*. Ya tengo un sitio web y me interesa tu plan de mantenimiento mensual.

Podés escribirme al *${phone}* o a *${email}*.

${message}

Contame cómo se empieza.`,

      en: `Hi, I’m *${name}*. I already have a website and I’m interested in your monthly maintenance plan.

You can contact me at *${phone}* or *${email}*.

${message}

What are the next steps?`
    },
    'digital-guidance': {
      es: `Hola, soy *${name}* y me gustaría recibir una asesoría para mejorar la presencia de mi negocio en internet.

Mi número es *${phone}* y mi correo es *${email}*.

${message}

Cuando quieras, lo coordinamos.`,

      en: `Hi, I’m *${name}* and I’d like to get your guidance to improve my business’s online presence.

You can reach me at *${phone}* or *${email}*.

${message}

Let me know when we can start.`
    },
    'whatsapp-automation': {
      es: `Hola, soy *${name}*. Me interesa conectar mi sitio con WhatsApp como explicás en tu web.

Mi número es *${phone}* y mi correo es *${email}*.

${message}

¿Avanzamos?`,

      en: `Hi, I’m *${name}*. I’m interested in connecting my website with WhatsApp like you describe.

My number is *${phone}* and my email is *${email}*.

${message}

Shall we move forward?`
    }
  };

  const msg = templates[service]?.[lang];

  if (!msg) throw new Error('Service or language not supported');

  return msg;
}
