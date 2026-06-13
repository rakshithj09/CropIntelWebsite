import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Full name is required.').max(120),
  email: z.string().trim().email('Enter a valid email address.').max(180),
  subject: z.string().trim().min(1, 'Subject is required.').max(160),
  message: z.string().trim().min(1, 'Message is required.').max(4000),
  website: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const parsed = contactSchema.safeParse(payload)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Please check the form fields and try again.' },
        { status: 400 }
      )
    }

    const { name, email, subject, message, website } = parsed.data

    // Honeypot spam protection: real visitors never fill this hidden field.
    // Return success without sending so bots do not learn they were blocked.
    if (website && website.trim().length > 0) {
      return NextResponse.json({ ok: true })
    }

    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL

    if (!apiKey || !contactEmail) {
      console.error('Missing RESEND_API_KEY or CONTACT_EMAIL for contact form.')
      return NextResponse.json(
        { error: 'Contact email is not configured.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    // Cofounders: CONTACT_EMAIL controls the recipient inbox. Resend requires
    // a verified sender domain for production; onboarding@resend.dev works for
    // basic testing under Resend's free tier.
    const { error } = await resend.emails.send({
      from: 'CropIntel <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject: `New CropIntel Contact Form Submission: ${subject}`,
      text: [
        'New CropIntel Contact Form Submission',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend contact form error:', error)
      return NextResponse.json(
        { error: 'Failed to send contact email.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form route error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form.' },
      { status: 500 }
    )
  }
}
