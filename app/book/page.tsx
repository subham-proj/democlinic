"use client";

import { useEffect } from "react";
import Link from "next/link";
import { WHATSAPP_URL, CAL_USERNAME } from "@/lib/constants";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window { Cal: any; }
}

export default function BookPage() {
  useEffect(() => {
    // Cal.com queue-based embed — calls are queued before the script loads,
    // so no need to wait for onload. Replace CAL_USERNAME in lib/constants.ts
    // with "your-cal-username/event-slug" (e.g. "subham-singh/30min") before going live.
    if (window.Cal?.loaded) return; // already initialised (HMR / StrictMode re-run)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: string, L: string) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal = C.Cal || function (...args: unknown[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          (d.head.appendChild(d.createElement("script")) as HTMLScriptElement).src = A;
          cal.loaded = true;
        }
        if (args[0] === L) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const api: any = (...a: unknown[]) => p(api, a);
          const ns = args[1];
          api.q = api.q || [];
          if (typeof ns === "string") {
            cal.ns[ns] = cal.ns[ns] || api;
            p(cal.ns[ns], args);
            p(cal, [`-init-${ns}`, ns]);
          } else { p(cal, args); }
          return;
        }
        p(cal, args);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", { origin: "https://app.cal.com" });
    // CAL_USERNAME format: "username/event-type-slug" e.g. "subham-singh/30min"
    window.Cal("inline", {
      elementOrSelector: "#cal-embed",
      calLink: CAL_USERNAME,
      layout: "month_view",
    });
    window.Cal("ui", {
      theme: "light",
      styles: { branding: { brandColor: "#0F6E56" } },
      hideEventTypeDetails: false,
    });
  }, []);

  const expectItems = [
    "You'll receive a WhatsApp confirmation within minutes of booking.",
    "A patient intake form link will be sent — please fill it before your session.",
    "Arrival instructions and clinic address will be included in your confirmation.",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Online booking
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Book Your Appointment
          </h1>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Choose a time that works for you. You&apos;ll receive a WhatsApp confirmation
            within minutes.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-8">
        {/* WhatsApp fallback note */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <p className="text-sm text-green-800">
            Prefer to book by WhatsApp?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 hover:no-underline"
            >
              Message us directly →
            </a>
          </p>
        </div>

        {/* Cal.com embed container */}
        {/* Replace "demo" in lib/constants.ts with the clinic's actual Cal.com username before going live */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div
            id="cal-embed"
            style={{ minHeight: "600px", width: "100%" }}
          />
        </div>

        {/* What to expect */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-900 text-lg mb-4">
            What happens after you book
          </h2>
          <ul className="flex flex-col gap-3">
            {expectItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-3">
              New patient? Fill out your intake form before your first visit.
            </p>
            <Link
              href="/intake"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Fill Intake Form
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
