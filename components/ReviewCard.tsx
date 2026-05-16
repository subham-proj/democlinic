interface ReviewCardProps {
  name: string;
  initials: string;
  rating: number;
  review: string;
  date: string;
}

export default function ReviewCard({
  name,
  initials,
  rating,
  review,
  date,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
          {initials}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-gray-900 text-sm">{name}</span>
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-accent"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-400 text-xs ml-1">{date}</span>
          </div>
        </div>
        <div className="ml-auto">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{review}&rdquo;</p>
    </div>
  );
}
