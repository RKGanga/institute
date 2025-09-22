export const metadata = {
  title: 'Terms and Conditions - Ram Tech Solutions',
  description: 'Read Ram Tech Solutions terms and conditions.'
}

import BackBar from '@/components/BackBar'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Mobile back bar */}
          <BackBar title="Back" />

          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Terms and Conditions</h1>
          <p className="text-sm text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="rounded-xl border border-gray-800 bg-gray-800/60 p-6 md:p-8 shadow-lg">
            <div className="prose prose-invert prose-slate max-w-none prose-headings:mt-8 prose-h2:text-2xl md:prose-h2:text-3xl prose-h3:text-xl prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-li:marker:text-[--primary-color]">
            <p>
              These Terms and Conditions ("Terms") govern your use of the Ram Tech Solutions website and services. By accessing or using our services,
              you agree to be bound by these Terms.
            </p>

            <h2>Use of Services</h2>
            <ul>
              <li>You agree to use our services only for lawful purposes and in accordance with these Terms.</li>
              <li>You will provide accurate, current, and complete information when requested.</li>
            </ul>

            <h2>Payments and Refunds</h2>
            <p>
              Fees for training programs will be communicated during enrollment. Refund eligibility, if any, will be subject to our refund policy
              communicated at the time of registration.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content, materials, and trademarks on this site are the property of Ram Tech Solutions or its licensors and are protected by applicable
              intellectual property laws. You may not copy, reproduce, or distribute content without prior written permission.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Ram Tech Solutions shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of our services.
            </p>

            <h2>Privacy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy, which explains how we collect and use your information.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be effective upon posting on this page with a revised date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@ramtechsolutions.com
            </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
