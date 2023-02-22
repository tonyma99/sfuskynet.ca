import { SENDGRID_API_KEY } from '$env/static/private'
import type { RequestHandler } from './$types'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(SENDGRID_API_KEY)

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json()
  const text = `Name: ${body.name}\nEmail: (${body.email})\n---\n\n${body.message}`

  try {
    const msg = {
      to: 'matonym@sfu.ca',
      from: 'matonym@sfu.ca',
      subject: 'SFU Robot Soccer Club Website Message',
      text: text
    }
    await sgMail.send(msg)
  } catch (e) {
    console.error(e)
    return new Response(null, { status: 500 })
  }

  return new Response(null, { status: 200 })
}
