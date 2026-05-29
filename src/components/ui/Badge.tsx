import React from 'react';

interface Props {
  variant?: 'new' | 'sale' | 'discount';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<Props> = ({ variant = 'new', children, className = '' }) => {
  const base = 'absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded';
  const variants = {
    new: 'bg-primary text-white',
    sale: 'bg-red-600 text-white',
    discount: 'bg-green-600 text-white',
  }[variant];
  return (
    <span className={`${base} ${variants} ${className}`}> {children || variant.charAt(0).toUpperCase() + variant.slice(1)} </span>
  );
};
