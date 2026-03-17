'use server'

type ContactResult = { ok: boolean, message: string }

export async function submitContactForm(
  _prev: ContactResult | null,
  formData: FormData
): Promise<ContactResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return { ok: false, message: 'not_configured' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { ok: false, message: 'validation' }
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: 'Contact — Onze Bouwgroep',
        name,
        email,
        phone,
        message,
        from_name: name,
      }),
    })
    const data = await res.json()
    if (data.success) {
      return { ok: true, message: 'success' }
    }
    return { ok: false, message: 'api_error' }
  } catch {
    return { ok: false, message: 'network' }
  }
}
