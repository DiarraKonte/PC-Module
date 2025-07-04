// app/api/contact/route.ts
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'diarrakontepro@gmail.com',
      to: 'diarrakontepro@gmail.com',
      subject: `[${subject}] Nouveau message de ${name}`,
      replyTo: email,
      html: `
        <h2>Nouveau message depuis le formulaire de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Erreur Resend:', err);
    return new Response(JSON.stringify({ error: 'Échec de l’envoi d’email' }), {
      status: 500,
    });
  }
}
