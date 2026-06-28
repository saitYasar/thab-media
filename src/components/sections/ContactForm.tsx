'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site-config'

interface FormDict {
  name: { label: string; placeholder: string }
  company: { label: string; placeholder: string }
  phone: { label: string; placeholder: string }
  email: { label: string; placeholder: string }
  service: { label: string; placeholder: string }
  message: { label: string; placeholder: string }
  consent: { label: string }
  submit: string
  success: string
  error: string
  mailtoNotice: string
}

interface ServiceDict {
  title: string
  shortDescription: string
}

interface ContactFormProps {
  dictionary: FormDict
  services: Record<string, ServiceDict>
}

const inputClass = 'w-full rounded-lg border border-border-default bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 focus:border-border-focus focus:outline-none focus:ring-1 focus:ring-border-focus transition-colors'

export function ContactForm({ dictionary, services }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const company = formData.get('company') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string
    const consent = formData.get('consent')

    // Validation
    const newErrors: Record<string, boolean> = {}
    if (!name.trim()) newErrors.name = true
    if (!email.trim()) newErrors.email = true
    if (!message.trim()) newErrors.message = true
    if (!consent) newErrors.consent = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})

    // Build mailto link
    const serviceLabel = service ? services[service]?.title ?? service : ''
    const subject = encodeURIComponent(`Teklif Talebi — ${serviceLabel || 'Genel'}`)
    const body = encodeURIComponent(
      `Ad: ${name}\nFirma: ${company}\nE-posta: ${email}\nTelefon: ${phone}\nHizmet: ${serviceLabel}\n\nMesaj:\n${message}`
    )

    // TODO: Replace with real email service / CRM integration
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-600">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-green-800 font-medium">{dictionary.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-heading mb-2">
            {dictionary.name.label} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={dictionary.name.placeholder}
            className={`${inputClass} ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-heading mb-2">
            {dictionary.company.label}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder={dictionary.company.placeholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">
            {dictionary.email.label} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={dictionary.email.placeholder}
            className={`${inputClass} ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-heading mb-2">
            {dictionary.phone.label}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={dictionary.phone.placeholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-text-heading mb-2">
          {dictionary.service.label}
        </label>
        <select
          id="service"
          name="service"
          className={inputClass}
        >
          <option value="">{dictionary.service.placeholder}</option>
          {Object.entries(services).map(([slug, svc]) => (
            <option key={slug} value={slug}>
              {svc.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-heading mb-2">
          {dictionary.message.label} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={dictionary.message.placeholder}
          className={`${inputClass} resize-y ${errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className={`mt-0.5 h-4 w-4 rounded border-border-default text-primary focus:ring-primary ${errors.consent ? 'border-red-400' : ''}`}
        />
        <label htmlFor="consent" className="text-sm text-text-muted leading-snug">
          {dictionary.consent.label}
        </label>
      </div>

      <p className="text-xs text-text-muted/60">{dictionary.mailtoNotice}</p>

      <button
        type="submit"
        className="w-full rounded-lg bg-accent text-white px-6 py-3.5 text-sm font-semibold hover:bg-accent-hover transition-all active:scale-[0.99] shadow-sm"
      >
        {dictionary.submit}
      </button>
    </form>
  )
}
