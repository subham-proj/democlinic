"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow text-sm";

const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-start gap-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-green-900">Message sent!</h3>
          <p className="text-green-800 text-sm mt-1">
            Thanks, {formData.name}! We&apos;ll get back to you within 24 hours. For faster
            responses, WhatsApp us directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
