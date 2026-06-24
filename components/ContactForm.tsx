'use client'

import { FormEvent, useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { company } from '@/lib/siteContent'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState)
  const [successMessage, setSuccessMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setFieldErrors((current) => ({ ...current, [field]: undefined }))
    setSuccessMessage('')
  }

  function validateForm() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Full name is required.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!isValidEmail(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!form.subject.trim()) {
      nextErrors.subject = 'Subject is required.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    setFieldErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSuccessMessage('')

    if (!validateForm()) return

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      '',
      form.message.trim(),
    ].join('\n')

    const mailtoUrl = `mailto:${company.contactEmail}?subject=${encodeURIComponent(
      form.subject.trim()
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setForm(initialFormState)
    setFieldErrors({})
    setSuccessMessage('Your email app should open with the message ready to send.')
  }

  return (
    <form onSubmit={handleSubmit} className="field-card p-6 sm:p-7" noValidate>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#986b2a]">Contact us</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
        Send a message to the CropIntel team
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
        Use the form below for launch updates, partnerships, grower feedback, and general company questions.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-800">Full Name</span>
          <input
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/80 bg-white/[0.72] px-4 py-3 text-sm text-slate-950 outline-none shadow-sm transition focus:border-primary-300 focus:ring-2 focus:ring-primary-700/15"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            required
          />
          {fieldErrors.name && <span className="mt-2 block text-xs font-semibold text-red-700">{fieldErrors.name}</span>}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-800">Email Address</span>
          <input
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/80 bg-white/[0.72] px-4 py-3 text-sm text-slate-950 outline-none shadow-sm transition focus:border-primary-300 focus:ring-2 focus:ring-primary-700/15"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            required
          />
          {fieldErrors.email && <span className="mt-2 block text-xs font-semibold text-red-700">{fieldErrors.email}</span>}
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-800">Subject</span>
        <input
        value={form.subject}
        onChange={(event) => updateField('subject', event.target.value)}
        className="mt-2 w-full rounded-2xl border border-white/80 bg-white/[0.72] px-4 py-3 text-sm text-slate-950 outline-none shadow-sm transition focus:border-primary-300 focus:ring-2 focus:ring-primary-700/15"
          type="text"
          autoComplete="off"
          aria-invalid={Boolean(fieldErrors.subject)}
          required
        />
        {fieldErrors.subject && <span className="mt-2 block text-xs font-semibold text-red-700">{fieldErrors.subject}</span>}
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-800">Message</span>
        <textarea
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="mt-2 min-h-[150px] w-full resize-y rounded-2xl border border-white/80 bg-white/[0.72] px-4 py-3 text-sm text-slate-950 outline-none shadow-sm transition focus:border-primary-300 focus:ring-2 focus:ring-primary-700/15"
          aria-invalid={Boolean(fieldErrors.message)}
          required
        />
        {fieldErrors.message && <span className="mt-2 block text-xs font-semibold text-red-700">{fieldErrors.message}</span>}
      </label>

      {successMessage && (
        <div className="mt-5 flex gap-3 rounded-2xl border border-primary-100 bg-primary-50/70 px-4 py-3 text-sm text-primary-900">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Prepare email
      </button>
    </form>
  )
}
