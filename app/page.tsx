import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import { SERVICES, REVIEWS, WHATSAPP_URL, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home — Expert Physiotherapy in Bengaluru",
};

const serviceIcons: Record<string, React.ReactNode> = {
  sports: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  spine: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 6h8M8 10h8M8 14h8M8 18h8" />
    </svg>
  ),
  surgery: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  neck: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  joint: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  neuro: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

const trustBadges = [
  "✓ 8+ Years Experience",
  "✓ 500+ Patients",
  "✓ Same-Day Appointments",
  "✓ Online Booking",
];

const howItWorksSteps = [
  {
    number: "1",
    title: "Book online in 60 seconds",
    description:
      "Choose your preferred date and time from our real-time calendar. No phone calls needed — instant confirmation sent to your WhatsApp.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Fill your intake form",
    description:
      "Complete our short patient intake form before you arrive. This lets our therapist prepare a personalised treatment plan for your very first session.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Get expert treatment",
    description:
      "Arrive at your scheduled time. No waiting room delays. Your therapist is ready with a plan tailored to your condition and goals.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "500+", label: "Patients Treated" },
  { value: "4.9★", label: "Google Rating" },
  { value: "2", label: "Specialist Therapists" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Accepting new patients · Indiranagar, Bengaluru
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Get back to doing<br className="hidden sm:block" /> what you love
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Expert physiotherapy for pain relief, injury recovery, and peak performance.
              Same-day appointments available — book online in under a minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Book Now — It&apos;s Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="text-white/80 text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          {/* Hero image */}
          <div className="hidden md:block relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
              alt="Physiotherapy session"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">What we treat</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Evidence-based physiotherapy for a wide range of conditions — from acute injuries to chronic pain management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={serviceIcons[service.icon]}
                title={service.title}
                description={service.shortDesc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section id="how-it-works" className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Simple process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">How It Works</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Getting the care you need should be easy. Here&apos;s how our process works — from first click to first session.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
                  <div className="w-7 h-7 flex items-center justify-center">{step.icon}</div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                    Step {step.number}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg mt-0.5">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Book Your First Session
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────── */}
      <section id="reviews" className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Patient stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Patients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">4.9 · Based on Google Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">About us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Bengaluru&apos;s trusted<br />physiotherapy clinic
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              PhysioPoint Clinic was founded with a simple belief: every patient deserves
              unhurried, expert attention. Located in the heart of Indiranagar, we&apos;ve been
              helping Bengaluru residents recover from injuries, manage chronic pain, and
              return to the activities they love — for over 8 years.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our therapists hold advanced degrees in physiotherapy and specialise in
              manual therapy, sports rehabilitation, and neurological care. We combine
              hands-on treatment with education, so you understand your condition and know
              how to prevent it from recurring.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background rounded-xl p-4 flex flex-col gap-1 border border-gray-100"
                >
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-gray-500 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
              alt="Physiotherapy clinic interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="bg-primary text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to feel better?</h2>
          <p className="text-white/80 text-lg">
            Join 500+ patients who&apos;ve recovered with PhysioPoint. Book your first session
            today — same-day slots often available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
