import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { PHONE, PHONE_HREF, EMAIL, WHATSAPP_URL, LOCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PhysioPoint Clinic in Indiranagar, Bengaluru. Call, WhatsApp, or fill the contact form.",
};

const hours = [
  { day: "Monday – Friday", time: "8:00 am – 8:00 pm" },
  { day: "Saturday", time: "9:00 am – 6:00 pm" },
  { day: "Sunday", time: "10:00 am – 2:00 pm" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Get in touch
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Contact Us</h1>
          <p className="text-gray-500 mt-3">
            We&apos;re here to help. Reach out by phone, WhatsApp, or the form below — we
            typically respond within a few hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-10">
        {/* Top row: Map + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-72 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.967308591!2d77.6408!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4a9a6e78b%3A0xe20e9e5bc41f49e!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PhysioPoint Clinic location"
            />
          </div>

          {/* Contact info + hours */}
          <div className="flex flex-col gap-6">
            {/* Contact card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
              <h2 className="font-semibold text-gray-900 text-lg">Reach Us</h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{LOCATION}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Phone</p>
                    <a href={PHONE_HREF} className="text-sm text-gray-700 hover:text-primary transition-colors">
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-700 hover:text-green-600 transition-colors"
                    >
                      Chat with us →
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-gray-700 hover:text-primary transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-semibold text-gray-900 text-lg mb-4">Opening Hours</h2>
              <table className="w-full text-sm">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className="border-b border-gray-50 last:border-0">
                      <td className="py-2.5 text-gray-700 font-medium">{h.day}</td>
                      <td className="py-2.5 text-right text-gray-500">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="max-w-xl">
            <h2 className="font-semibold text-gray-900 text-xl mb-1">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-6">
              We&apos;ll get back to you within 24 hours. For urgent queries, call or WhatsApp us directly.
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Book CTA */}
        <div className="bg-primary rounded-2xl p-8 text-white text-center flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-bold">Ready to book?</h2>
          <p className="text-white/80">
            Skip the back-and-forth — check real-time availability and book your session
            instantly.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
