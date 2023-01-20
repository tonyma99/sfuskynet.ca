import { SENDGRID_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(SENDGRID_API_KEY)

export async function POST({ request }) {
    const body = await request.json();
    const text = `${body.name} (${body.email})\n---\n\n${body.message}`

    try {
        const msg = {
            to: 'matonym@sfu.ca',
            from: 'matonym@sfu.ca', 
            subject: 'SFU Robot Soccer Club Website Message',
            text: text,
        }
        sgMail.send(msg)
    } catch (e) {
        console.log(e)
        return new Response({ status: 500 });
    }
   
    return new Response({ status: 200 });
}
