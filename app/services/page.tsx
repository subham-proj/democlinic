import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, FAQS } from "@/lib/constants";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full details on physiotherapy services at PhysioPoint Clinic — sports rehab, back pain, post-surgery recovery, and more.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  sports: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  spine: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 6h8M8 10h8M8 14h8M8 18h8" />
    </svg>
  ),
  surgery: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  neck: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  joint: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  neuro: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">
            What we treat
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Our Services</h1>
          <p className="text-white/80 mt-3 text-lg max-w-xl mx-auto">
            Evidence-based physiotherapy for a full spectrum of conditions. Each service
            is tailored to your specific needs and goals.
          </p>
        </div>
      </div>

      {/* Service sections */}
      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-14 px-6 ${index % 2 === 0 ? "bg-background" : "bg-white"}`}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  {serviceIcons[service.icon]}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors w-fit text-sm"
              >
                Book for this condition
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Conditions we treat</h3>
              <ul className="flex flex-col gap-2.5">
                {service.conditions.map((condition) => (
                  <li key={condition} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ section */}
      <section className="py-16 md:py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Common questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-3">
              Everything you need to know before your first visit.
            </p>
          </div>
          <FaqAccordion faqs={FAQS} />
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Still have questions? We&apos;re happy to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
