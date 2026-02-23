import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const handlePrint = () => window.print()

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <header className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: February 23, 2026</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button onClick={handlePrint} className="bg-black text-white px-4 py-2 rounded hover:opacity-95">Print / Save PDF</button>
            <Link to="/contact" className="text-sm text-slate-600 underline">Contact us</Link>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <nav className="lg:col-span-1 sticky top-24 self-start hidden lg:block">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm font-medium mb-3">On this page</p>
              <ul className="text-sm space-y-2">
                <li><a href="#overview" className="text-slate-700 hover:text-black">Overview</a></li>
                <li><a href="#data" className="text-slate-700 hover:text-black">Data we collect</a></li>
                <li><a href="#use" className="text-slate-700 hover:text-black">How we use data</a></li>
                <li><a href="#sharing" className="text-slate-700 hover:text-black">Sharing</a></li>
                <li><a href="#cookies" className="text-slate-700 hover:text-black">Cookies</a></li>
                <li><a href="#security" className="text-slate-700 hover:text-black">Security</a></li>
                <li><a href="#rights" className="text-slate-700 hover:text-black">Your rights</a></li>
                <li><a href="#contact" className="text-slate-700 hover:text-black">Contact</a></li>
              </ul>
            </div>
          </nav>

          <article className="lg:col-span-3 space-y-8">
            <section id="overview" className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3">Overview</h2>
              <p className="text-slate-600 leading-relaxed">
                We respect your privacy and are committed to protecting your personal information. This
                policy explains what data we collect, why we collect it, and how you can control it.
              </p>
            </section>

            <section id="data" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Data we collect</h3>
              <ul className="list-disc pl-5 text-slate-600 space-y-2">
                <li><strong>Account information:</strong> name, email, shipping address when you place an order.</li>
                <li><strong>Transaction data:</strong> order details, payment metadata (we do not store full card numbers).</li>
                <li><strong>Device & usage:</strong> log data, cookies, and analytics to improve our service.</li>
                <li><strong>Customer service records:</strong> messages you send when contacting support.</li>
              </ul>
            </section>

            <section id="use" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">How we use your data</h3>
              <p className="text-slate-600 leading-relaxed">We use information to:</p>
              <ul className="list-decimal pl-5 text-slate-600 space-y-2 mt-3">
                <li>Process and fulfill orders, including shipping and invoicing.</li>
                <li>Provide customer support and respond to inquiries.</li>
                <li>Personalize your experience and show relevant products.</li>
                <li>Detect and prevent fraud, and comply with legal obligations.</li>
              </ul>
            </section>

            <section id="sharing" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">When we share data</h3>
              <p className="text-slate-600 leading-relaxed">
                We only share data with third parties when necessary: payment processors, shipping providers,
                and analytics partners. We require partners to protect your data and only use it for the
                agreed-upon purposes.
              </p>
            </section>

            <section id="cookies" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Cookies & tracking</h3>
              <p className="text-slate-600 leading-relaxed">
                We use cookies and similar technologies to operate the site, remember preferences, and show
                personalized content. You can control cookie settings via your browser — blocking cookies may
                affect some site features.
              </p>
            </section>

            <section id="security" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Security</h3>
              <p className="text-slate-600 leading-relaxed">
                We implement reasonable technical and organizational measures to protect data. While we aim
                to keep your information secure, no system is completely risk-free — please take care when
                sharing sensitive information online.
              </p>
            </section>

            <section id="rights" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Your rights</h3>
              <p className="text-slate-600 leading-relaxed">
                Depending on where you live, you may have rights to access, correct, delete, or export your
                personal data. To exercise these rights, contact us using the details below.
              </p>
            </section>

            <section id="children" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Children</h3>
              <p className="text-slate-600 leading-relaxed">
                Our services are not intended for children under 13. We do not knowingly collect personal
                information from children; if you believe we have, please contact us so we can delete it.
              </p>
            </section>

            <section id="changes" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Changes to this policy</h3>
              <p className="text-slate-600 leading-relaxed">
                We may update this policy from time to time. If we make material changes, we'll post the new
                date above and, where appropriate, notify customers by email or site notice.
              </p>
            </section>

            <section id="contact" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <p className="text-slate-600 leading-relaxed">
                If you have questions about this policy or want to exercise your rights, email us at
                <a href="mailto:support@example.com" className="text-slate-800 underline"> support@example.com</a>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicy
