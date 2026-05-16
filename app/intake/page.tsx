"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  chiefComplaint: string;
  painLevel: number;
  duration: string;
  previousPhysio: string;
  medications: string;
  referralSource: string;
  additionalNotes: string;
}

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow text-sm";

const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

export default function IntakePage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    chiefComplaint: "",
    painLevel: 5,
    duration: "",
    previousPhysio: "",
    medications: "",
    referralSource: "",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, painLevel: parseInt(e.target.value) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 max-w-md w-full text-center flex flex-col items-center gap-5">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Thank you, {formData.fullName}!
            </h2>
            <p className="text-gray-500 mt-2 leading-relaxed">
              We&apos;ve received your intake form. Dr. Sharma will review it before your
              session. See you soon!
            </p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 text-sm text-gray-600 text-left w-full">
            <p className="font-medium text-gray-800 mb-1">What happens next?</p>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                Your therapist will review your details
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                A WhatsApp confirmation will be sent 24hrs before
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                Arrive 5 minutes early for your session
              </li>
            </ul>
          </div>
          {!formData.fullName.trim() || (
            <Link
              href="/book"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg text-center transition-colors"
            >
              Book Your Appointment
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="max-w-2xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            New patient
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Patient Intake Form
          </h1>
          <p className="text-gray-500 mt-3">
            Please fill this out before your first visit. It helps us prepare for your
            session and ensure you receive the most effective treatment.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-5">
            <h2 className="font-semibold text-gray-900 text-base border-b border-gray-100 pb-3">
              Personal Information
            </h2>

            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="dob" className={labelClass}>
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <fieldset>
                  <legend className={labelClass}>
                    Gender <span className="text-red-500">*</span>
                  </legend>
                  <div className="flex flex-wrap gap-4 mt-1">
                    {["Male", "Female", "Prefer not to say"].map((g) => (
                      <label key={g} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          required
                          checked={formData.gender === g}
                          onChange={handleChange}
                          className="accent-primary"
                        />
                        <span className="text-sm text-gray-700">{g}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          {/* Condition Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-5">
            <h2 className="font-semibold text-gray-900 text-base border-b border-gray-100 pb-3">
              Your Condition
            </h2>

            <div>
              <label htmlFor="chiefComplaint" className={labelClass}>
                Chief Complaint / Reason for Visit <span className="text-red-500">*</span>
              </label>
              <textarea
                id="chiefComplaint"
                name="chiefComplaint"
                required
                rows={3}
                value={formData.chiefComplaint}
                onChange={handleChange}
                placeholder="e.g. Lower back pain for 3 weeks after lifting heavy objects at work"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Current Pain Level{" "}
                <span className="text-primary font-semibold text-base ml-2">
                  {formData.painLevel} / 10
                </span>
              </label>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">No pain</span>
                <input
                  type="range"
                  name="painLevel"
                  min={1}
                  max={10}
                  step={1}
                  value={formData.painLevel}
                  onChange={handleRangeChange}
                  className="flex-1 h-2 cursor-pointer"
                />
                <span className="text-xs text-gray-400">Severe</span>
              </div>
            </div>

            <div>
              <label htmlFor="duration" className={labelClass}>
                How long have you had this problem? <span className="text-red-500">*</span>
              </label>
              <select
                id="duration"
                name="duration"
                required
                value={formData.duration}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Select duration
                </option>
                <option value="less-than-1-week">Less than 1 week</option>
                <option value="1-4-weeks">1–4 weeks</option>
                <option value="1-3-months">1–3 months</option>
                <option value="more-than-3-months">More than 3 months</option>
              </select>
            </div>

            <div>
              <fieldset>
                <legend className={labelClass}>
                  Have you had physiotherapy treatment before?{" "}
                  <span className="text-red-500">*</span>
                </legend>
                <div className="flex gap-6 mt-1">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="previousPhysio"
                        value={opt}
                        required
                        checked={formData.previousPhysio === opt}
                        onChange={handleChange}
                        className="accent-primary"
                      />
                      <span className="text-sm text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-5">
            <h2 className="font-semibold text-gray-900 text-base border-b border-gray-100 pb-3">
              Additional Information
            </h2>

            <div>
              <label htmlFor="medications" className={labelClass}>
                Current Medications{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                id="medications"
                name="medications"
                rows={2}
                value={formData.medications}
                onChange={handleChange}
                placeholder="List any medications you are currently taking"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="referralSource" className={labelClass}>
                How did you hear about us?
              </label>
              <select
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select an option</option>
                <option value="google">Google</option>
                <option value="friend-family">Friend or Family</option>
                <option value="instagram">Instagram</option>
                <option value="practo">Practo</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="additionalNotes" className={labelClass}>
                Anything else we should know?{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={3}
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Any allergies, previous surgeries, or other details that might be relevant"
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl text-base transition-colors shadow-sm"
          >
            Submit Form
          </button>
          <p className="text-center text-xs text-gray-400">
            Your information is kept strictly confidential and used only to prepare for your
            physiotherapy session.
          </p>
        </form>
      </div>
    </div>
  );
}
