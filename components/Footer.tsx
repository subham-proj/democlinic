import Link from "next/link";
import { CLINIC_NAME, TAGLINE, LOCATION, PHONE, PHONE_HREF, EMAIL, WHATSAPP_URL } from "@/lib/constants";

const serviceLinks = [
  { label: "Sports Injury Rehab", href: "/services#sports-injury" },
  { label: "Back & Spine Care", href: "/services#back-spine" },
  { label: "Post-Surgery Recovery", href: "/services#post-surgery" },
  { label: "Neck & Shoulder Pain", href: "/services#neck-shoulder" },
  { label: "Joint & Arthritis Care", href: "/services#joint-arthritis" },
  { label: "Neurological Rehab", href: "/services#neuro-rehab" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <Link href="/" className="text-white font-bold text-lg">
              {CLINIC_NAME}
            </Link>
            <p className="text-gray-400 text-sm mt-1">{TAGLINE}</p>
          </div>
          <p className="text-sm leading-relaxed">
            A modern physiotherapy clinic serving Bengaluru. Trusted by 500+ patients for
            expert, personalised care.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Services
          </h4>
          <ul className="flex flex-col gap-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Contact & Hours
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="leading-relaxed">{LOCATION}</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
            </li>
            <li className="mt-1 text-xs leading-relaxed text-gray-500">
              Mon–Fri: 8am – 8pm<br />
              Saturday: 9am – 6pm<br />
              Sunday: 10am – 2pm
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © 2026 {CLINIC_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Demo portal — content customisable per clinic
          </p>
        </div>
      </div>
    </footer>
  );
}
