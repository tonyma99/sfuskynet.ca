import { SENDGRID_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(SENDGRID_API_KEY)

export async function POST({ request }) {
    const data = await request.json();
    const text = `${data.name} (${data.email})\n---\n\n${data.message}`

    try {
        const msg = {
            to: 'matonym@sfu.ca',
            from: 'matonym@sfu.ca', 
            subject: 'SFU Robot Soccer Club Website Message',
            text: text,
        }
        sgMail.send(msg)
    } catch (e) {
        return new Response(e);
    }
   
    return new Response('Message successfully sent.');
}
