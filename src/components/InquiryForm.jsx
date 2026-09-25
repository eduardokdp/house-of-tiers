import { useState } from 'react'

const TO_EMAIL = 'eduardokdp1@gmail.com'

const eventTypes = [
  'Kid\u2019s Birthday',
  'Wedding',
  'Regular Cake',
  'Baby Shower',
  'Anniversary',
  'Other',
]

const fieldClasses =
  'w-full rounded-xl border border-espresso/20 bg-ivory px-4 py-3 font-body text-sm text-espresso placeholder:text-espresso-soft/60 focus:border-espresso/50 focus:outline-none transition-colors'

function buildMailto({ name, date, guests, eventType, message, fileName }) {
  const subject = `Cake Inquiry from ${name || 'a visitor'}`

  let body = `Hi, my name is ${name} and I want to inquire about a cake.\n `
  body += `\n`
  body += `This is the specifics: ${message}.\n `
  body += `\n`
  body += `Where the event is taking place on ${date} with ${guests} guests. `
  body += `This is for a ${eventType}.`
  if (fileName) {
    body += `\n\nP.S. I have an inspiration photo (${fileName}) attached — don't forget to attach it before sending!`
  }

  const params = new URLSearchParams({ subject, body })
  return `mailto:${TO_EMAIL}?${params.toString().replace(/\+/g, '%20')}`
}

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    guests: '',
    eventType: eventTypes[0],
    message: '',
  })
  const [file, setFile] = useState(null)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const ACCEPTED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/heic', 'image/webp']
  const handleFileChange = (e) => {
    const picked = e.target.files?.[0]
  if (picked && !ACCEPTED_TYPES.includes(picked.type)) {
    alert('Please upload a PDF or image file (JPG, PNG, etc).')
    e.target.value = ''
    setFile(null)
    return
    }
    setFile(picked || null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.message) return

    const mailtoUrl = buildMailto({ ...form, fileName: file?.name })
    window.location.href = mailtoUrl
  }

  return (
    <section id="inquire" className="px-6 py-24 sm:py-28 bg-cream-dark">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-espresso-soft mb-3">Inquire Now</p>
          <h2 className="font-display text-4xl sm:text-5xl text-espresso">Request a Quote</h2>
          <p className="mt-4 font-body text-espresso-soft">
            Fill in a few details below and we'll open your email app with
            everything pre-filled, ready to send to Harleen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-ivory rounded-3xl shadow-soft p-7 sm:p-10 space-y-5">
          <div>
            <label htmlFor="name" className="block font-body text-xs tracking-[0.1em] uppercase text-espresso-soft mb-2">
              Name
            </label>
            <input id="name" required value={form.name} onChange={update('name')} className={fieldClasses} placeholder="Your name" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="date" className="block font-body text-xs tracking-[0.1em] uppercase text-espresso-soft mb-2">
                Event Date
              </label>
              <input id="date" type="date" value={form.date} onChange={update('date')} className={fieldClasses} />
            </div>
            <div>
              <label htmlFor="guests" className="block font-body text-xs tracking-[0.1em] uppercase text-espresso-soft mb-2">
                Guest Count
              </label>
              <input id="guests" type="number" min="1" value={form.guests} onChange={update('guests')} className={fieldClasses} placeholder="e.g. 25" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="message" className="block font-body text-xs tracking-[0.1em] uppercase text-espresso-soft mb-2">
                Tell Harleen about your cake
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                className={fieldClasses}
                placeholder="Colours, flavours, inspiration, allergies…"
              />
            </div>

            <div>
              <label htmlFor="eventType" className="block font-body text-xs tracking-[0.1em] uppercase text-espresso-soft mb-2">
                What's the Event?
              </label>
              <select id="eventType" value={form.eventType} onChange={update('eventType')} className={`${fieldClasses} mb-4`}>
                {eventTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              <label htmlFor="inspiration" className="block font-body text-xs tracking-[0.1em] uppercase text-espresso-soft mb-2">
                Inspiration Photo
              </label>
              <label
                htmlFor="inspiration"
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-espresso/30 bg-cream px-4 py-6 text-center cursor-pointer hover:border-espresso/50 transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 16V4m0 0L7 9m5-5l5 5" stroke="#3B2A1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="#3B2A1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-body text-xs text-espresso-soft">
                  {file ? file.name : 'Click to upload a Imaage'}
                </span>
                <input id="inspiration" type="file" accept="application/pdf,image/jpeg,image/png,image/heic,image/webp" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-espresso text-ivory py-4 font-body text-sm tracking-[0.14em] uppercase hover:bg-espresso-light transition-colors"
          >
            Send Inquiry
          </button>

          {file && (
            <p className="text-center font-body text-xs text-espresso-soft">
              Your email app doesn't attach files automatically — remember to
              attach "{file.name}" before you hit send.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}