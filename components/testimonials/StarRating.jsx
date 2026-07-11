export default function StarRating({ rating, className = "h-4 w-4" }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={className}
          fill={i < rating ? "currentColor" : "none"}
        >
          <path
            d="M12 3 L14.8 9 L21.3 9.8 L16.6 14.2 L17.9 20.6 L12 17.4 L6.1 20.6 L7.4 14.2 L2.7 9.8 L9.2 9 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}
