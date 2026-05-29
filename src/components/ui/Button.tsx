import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const baseClasses = 'rounded-md font-medium transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-bg-light text-primary border border-primary hover:bg-bg-light/80 focus:ring-primary',
  }[variant];
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
};
