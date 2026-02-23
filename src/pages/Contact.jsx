import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Contact form submit:', form)
    // Basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }

    setStatus('sending')
    // Simulate async submission
    try {
      await new Promise((r) => setTimeout(r, 900))
      setStatus('success')
      console.log('Contact form submitted successfully')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero */}
      <section className="bg-linear-to-r from-slate-900 via-slate-800 to-black text-white py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-slate-200/90 text-sm sm:text-base">
              We're here to help — whether you have a question about products, orders, or anything else. Fill
              the form or use the contact details below and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="container mx-auto px-6 md:px-12 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Contact info cards */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Contact information</h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="flex-none bg-slate-100 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4m-6 4h20" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Support center</p>
                  <p className="font-medium">support@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-none bg-slate-100 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-none bg-slate-100 p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0122 9.618V16a2 2 0 01-2 2h-5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Address</p>
                  <p className="font-medium">123 Fashion Ave, New York, NY</p>
                </div>
              </div>
            </div>

            <hr className="my-6" />

            <div>
              <p className="text-sm text-slate-500">Follow us</p>
              <div className="flex items-center gap-3 mt-3">
                <a aria-label="twitter" className="p-2 bg-slate-100 rounded hover:bg-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.924c-.68.301-1.41.505-2.178.597.783-.469 1.382-1.21 1.665-2.095-.732.434-1.543.749-2.405.919A3.973 3.973 0 0015.5 4c-2.21 0-4 1.79-4 4 0 .312.036.616.102.907C7.69 8.78 4.066 6.89 1.64 3.86c-.343.59-.54 1.277-.54 2.006 0 1.386.705 2.609 1.777 3.326-.655-.021-1.272-.201-1.81-.5v.05c0 1.936 1.377 3.553 3.205 3.922-.336.092-.69.142-1.055.142-.258 0-.509-.026-.753-.073.51 1.593 1.99 2.752 3.744 2.786A7.993 7.993 0 012 19.54 11.3 11.3 0 008.29 21c6.183 0 9.566-5.122 9.566-9.566 0-.146-.003-.292-.01-.437.657-.474 1.227-1.067 1.678-1.745z"/></svg>
                </a>
                <a aria-label="instagram" className="p-2 bg-slate-100 rounded hover:bg-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.7A4.3 4.3 0 1016.3 13 4.3 4.3 0 0012 8.7zm6.5-3.6a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form + Map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Send us a message</h3>
              <p className="text-sm text-slate-500 mb-4">We'll reply as soon as possible — usually within 24 hours.</p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm text-slate-600 mb-1">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your name" />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm text-slate-600 mb-1">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="you@example.com" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-600 mb-1">Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Subject (optional)" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-600 mb-1">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Tell us about your question or issue"></textarea>
                </div>

                <div className="md:col-span-2 flex items-center gap-3">
                  <button type="submit" disabled={status === 'sending'} className="bg-black text-white px-5 py-2 rounded hover:opacity-95 disabled:opacity-60">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && <p className="text-green-600 text-sm">Thanks — we'll be in touch!</p>}
                  {status === 'error' && <p className="text-red-600 text-sm">Please provide name, email and a message.</p>}
                </div>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6">
                  <h4 className="font-semibold mb-2">Our store</h4>
                  <p className="text-sm text-slate-600 mb-4">Visit us or send a message — we're happy to help you in person or online.</p>
                  <p className="text-sm"><strong>Hours:</strong> Mon–Fri, 9am–6pm</p>
                  <p className="text-sm">Phone: +1 (555) 123-4567</p>
                </div>
                <div className="h-56 lg:h-auto">
                  <iframe title="map" className="w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799146242!2d-74.25986768702821!3d40.69767006316373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1599618912430!5m2!1sen!2sus" allowFullScreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
