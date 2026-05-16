import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  id?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = "/book",
  id,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200 border border-gray-100">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-gray-900 text-lg leading-snug">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
      <Link
        href={id ? `/services#${id}` : href}
        className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-auto"
      >
        Learn more
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
