import { createServiceClient } from '@/lib/supabase/serviceClient'

type Settings = Record<string, string>

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ContactPage() {
  // Use service client on the server to read site_settings without RLS friction
  const supabase = createServiceClient()
  // Read settings from key-value table `site_settings`
  const wantedKeys = [
    'contact_email',
    'contact_phone_in',
    'contact_phone_au',
    'contact_phone_uk',
    'contact_phone_us',
    'contact_whatsapp',
    'social_instagram',
    'social_linkedin',
    'social_youtube',
  ]

  let settings: Settings = {}
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('key,value')
      .in('key', wantedKeys)
    if (!error && data) {
      for (const row of data) settings[row.key] = String(row.value ?? '')
    }
  } catch (e) {
    // ignore and use defaults
  }

  const email = settings.contact_email || 'support@ramtechsolutions.com'
  const phoneIN = settings.contact_phone_in || '+91 98765 43210'
  const phoneAU = settings.contact_phone_au || '+61 4 1234 5678'
  const phoneUK = settings.contact_phone_uk || '+44 7700 900000'
  const phoneUS = settings.contact_phone_us || '+1 (555) 123-4567'
  const whatsapp = settings.contact_whatsapp || 'https://wa.me/15559876543'
  const instagram = settings.social_instagram || '#'
  const linkedin = settings.social_linkedin || '#'
  const youtube = settings.social_youtube || '#'

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Header */}

      {/* Content */}
      <section className="px-6 md:px-10 lg:px-16 xl:px-40 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-slate-400 text-lg">We're here to help! Reach out to us via any channel below and we'll get back to you as soon as possible.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact info + socials */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-yellow-400">mail</span>
                  <a className="text-slate-300 hover:text-white" href={`mailto:${email}`}>{email}</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-yellow-400">call</span>
                  <div className="flex flex-col text-slate-300">
                    <a className="hover:text-white" href={`tel:${phoneIN.replace(/\s/g,'')}`}>India: {phoneIN}</a>
                    <a className="hover:text-white" href={`tel:${phoneAU.replace(/\s/g,'')}`}>Australia: {phoneAU}</a>
                    <a className="hover:text-white" href={`tel:${phoneUK.replace(/\s/g,'')}`}>UK: {phoneUK}</a>
                    <a className="hover:text-white" href={`tel:${phoneUS.replace(/\s/g,'')}`}>US: {phoneUS}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-yellow-400">sms</span>
                  <a className="text-slate-300 hover:text-white" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8">Follow Us</h3>
              <div className="flex gap-6">
                <a className="text-slate-400 hover:text-white" href={instagram || '#'} aria-label="Instagram" target="_blank" rel="noreferrer">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.273 0-3.692.012-4.981.072-4.354.2-6.135 1.98-6.335 6.335-.06 1.288-.072 1.708-.072 4.981s.012 3.692.072 4.981c.2 4.354 1.981 6.135 6.335 6.335.60 1.288.072 1.708.072 4.981s-.012-3.692-.072-4.981c-.2-4.354-1.98-6.135-6.335-6.335-1.288-.60-1.708-.072-4.981-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg>
                </a>
                <a className="text-slate-400 hover:text-white" href={linkedin || '#'} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
                <a className="text-slate-400 hover:text-white" href={youtube || '#'} aria-label="YouTube" target="_blank" rel="noreferrer">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                </a>
              </div>
            </div>

            {/* Message form */}
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="sr-only" htmlFor="name">Your Name</label>
                  <input id="name" className="w-full rounded-full bg-slate-700 border-transparent focus:border-transparent focus:ring-0 text-white h-12 px-5 placeholder:text-slate-400" placeholder="Your Name" />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">Your Email</label>
                  <input id="email" type="email" className="w-full rounded-full bg-slate-700 border-transparent focus:border-transparent focus:ring-0 text-white h-12 px-5 placeholder:text-slate-400" placeholder="Your Email" />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">Your Message</label>
                  <textarea id="message" className="w-full rounded-2xl bg-slate-700 border-transparent focus:border-transparent focus:ring-0 text-white min-h-36 p-5 placeholder:text-slate-400" placeholder="Your Message"></textarea>
                </div>
                <button type="button" className="w-full rounded-full h-12 px-6 bg-yellow-400 text-slate-900 text-base font-bold tracking-wide hover:bg-yellow-300">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-10 py-8 text-center text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            <a className="hover:text-white text-sm" href="#">Privacy Policy</a>
            <a className="hover:text-white text-sm" href="#">Terms of Service</a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Ram Tech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
