import { EMAIL, SENDGRID_API_KEY } from '$env/static/private'
import type { RequestHandler } from './$types'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(SENDGRID_API_KEY)

export const POST: RequestHandler = async ({ request }) => {
  const { name, email, message } = await request.json()

  try {
    const msg = {
      to: EMAIL,
      from: {
        email: EMAIL,
        name: 'SFU Robot Soccer (Website)'
      },
      replyTo: {
        email,
        name
      },
      html: `
        <p>
          Name: <strong>${name}</strong><br>
          Email: <strong>${email}</strong>
        </p>
        <hr/>
        <p style="white-space: pre-wrap;">${message}</p>`,
      subject: 'SFU Robot Soccer - Message'
    }
    await sgMail.send(msg)
  } catch {
    return new Response(null, { status: 500 })
  }
  return new Response(null, { status: 200 })
}
