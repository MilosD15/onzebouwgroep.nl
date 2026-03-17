'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitContactForm } from '@/app/actions/contact'
import { contact } from '@/content/site'

const initial = null as Awaited<ReturnType<typeof submitContactForm>> | null

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initial)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.ok) {
      formRef.current?.reset()
    }
  }, [state?.ok])

  return (
    <div className="rounded-[var(--radius-lg)] border border-black/5 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
      <h3 className="text-lg font-semibold text-foreground">Bericht sturen</h3>
      <form ref={formRef} action={formAction} className="mt-6 space-y-4">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
            {contact.formName}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-[var(--radius-md)] border border-black/10 bg-brand-gray/30 px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-brand-red focus:bg-white focus:outline-none"
            placeholder="Uw naam"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
            {contact.formEmail}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-[var(--radius-md)] border border-black/10 bg-brand-gray/30 px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-brand-red focus:bg-white focus:outline-none"
            placeholder="uw@email.nl"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-foreground">
            {contact.formPhone}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-[var(--radius-md)] border border-black/10 bg-brand-gray/30 px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-brand-red focus:bg-white focus:outline-none"
            placeholder="06 …"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
            {contact.formMessage}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="w-full resize-y rounded-[var(--radius-md)] border border-black/10 bg-brand-gray/30 px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-brand-red focus:bg-white focus:outline-none"
            placeholder="Beschrijf uw project of vraag…"
          />
        </div>

        {state?.ok && (
          <p className="rounded-[var(--radius-md)] bg-green-50 px-4 py-3 text-sm font-medium text-green-800" role="status">
            {contact.formSuccess}
          </p>
        )}
        {state && !state.ok && state.message === 'not_configured' && (
          <p className="rounded-[var(--radius-md)] bg-amber-50 px-4 py-3 text-sm text-amber-900" role="alert">
            {contact.formConfigHint}
          </p>
        )}
        {state && !state.ok && state.message === 'validation' && (
          <p className="rounded-[var(--radius-md)] bg-amber-50 px-4 py-3 text-sm text-amber-900" role="alert">
            {contact.formValidation}
          </p>
        )}
        {state && !state.ok && state.message !== 'not_configured' && state.message !== 'validation' && (
          <p className="rounded-[var(--radius-md)] bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
            {contact.formError}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-[var(--radius-md)] bg-brand-red px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.01] hover:bg-brand-red/95 disabled:opacity-60 sm:w-auto"
        >
          {pending ? 'Verzenden…' : contact.formSubmit}
        </button>
      </form>
    </div>
  )
}
