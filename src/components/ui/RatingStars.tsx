import React from 'react';

interface Props {
  rating: number; // 0 to 5, can be half steps
  className?: string;
}

export const RatingStars: React.FC<Props> = ({ rating, className = '' }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg key={`full-${i}`} className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.183c.969 0 1.371 1.24.588 1.81l-3.387 2.462a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.387 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.61 9.384c-.783-.57-.38-1.81.588-1.81h4.183a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    );
  }
  if (hasHalf) {
    stars.push(
      <svg key="half" className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.183c.969 0 1.371 1.24.588 1.81l-3.387 2.462a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.387 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.61 9.384c-.783-.57-.38-1.81.588-1.81h4.183a1 1 0 00.95-.69l1.286-3.957z" fill="url(#halfGrad)" />
      </svg>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.183c.969 0 1.371 1.24.588 1.81l-3.387 2.462a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.387 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.61 9.384c-.783-.57-.38-1.81.588-1.81h4.183a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    );
  }
  return <div className={`flex items-center ${className}`}>{stars}</div>;
};
