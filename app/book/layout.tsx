import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your physiotherapy appointment online at PhysioPoint Clinic, Indiranagar Bengaluru. Same-day slots available.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
