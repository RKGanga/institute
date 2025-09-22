export const metadata = {
  title: 'Privacy Policy - Ram Tech Solutions',
  description: 'Read Ram Tech Solutions privacy policy.'
}

import BackBar from '@/components/BackBar'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Mobile back bar */}
          <BackBar title="Back" />

          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="rounded-xl border border-gray-800 bg-gray-800/60 p-6 md:p-8 shadow-lg">
            <div className="prose prose-invert prose-slate max-w-none prose-headings:mt-8 prose-h2:text-2xl md:prose-h2:text-3xl prose-h3:text-xl prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-li:marker:text-[--primary-color]">
            <p>
              Ram Tech Solutions ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Contact information such as your name, email address, and phone number when you submit forms.</li>
              <li>Course preferences and messages you share with us.</li>
              <li>Usage data such as pages visited and interactions to improve our services.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and provide requested information.</li>
              <li>To deliver and improve our training services and website experience.</li>
              <li>To communicate updates, offers, and service-related notices (you may opt out at any time).</li>
            </ul>

            <h2>Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share it with trusted service providers who assist us in operating our website, conducting
              our business, or servicing you, provided those parties agree to keep this information confidential. We may also disclose information when
              required by law.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission
              over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal information by contacting us. We will respond within a reasonable timeframe.
            </p>

            <h2>Contact Us</h2>
            <p>
              For questions about this Privacy Policy, please contact us at support@ramtechsolutions.com
            </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
