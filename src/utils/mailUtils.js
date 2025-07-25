// gmail
export function generateGmailLink(email, subject, body) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}