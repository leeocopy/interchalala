// The original server route is not shipped to the browser. The client (components/rea/Contact.js) expects
// { ok, delivery: { url, fields } } and then posts `fields` to `url`, reading a FormSubmit-style
// { success, message } response. Set CONTACT_EMAIL to receive messages.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (body.website) return Response.json({ ok: true });
  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false, error: "Merci d’indiquer votre nom, un e-mail valide et un message." }, { status: 422 });
  }

  const recipient = process.env.CONTACT_EMAIL;
  if (!recipient) {
    return Response.json({ ok: false, error: "Le formulaire de contact n’est pas encore configuré." }, { status: 503 });
  }

  return Response.json({
    ok: true,
    delivery: {
      url: `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
      fields: { name, email, message, _subject: `Prestoillico — nouveau message de ${name}`, _template: "table", _captcha: "false" },
    },
  });
}
