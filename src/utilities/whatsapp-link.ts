export default function createWhatsappUrl(phoneNumber: string, message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}
