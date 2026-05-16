import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Intake Form",
  description:
    "Fill out the PhysioPoint patient intake form before your first visit to help us prepare for your session.",
};

export default function IntakeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
