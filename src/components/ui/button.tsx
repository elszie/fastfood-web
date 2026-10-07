import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
};

export function Button({ className = '', variant = 'default', size = 'default', ...props }: ButtonProps) {
  const variants: Record<string, string> = {
    default: 'bg-[#e8731a] text-white hover:bg-[#c85a0a]',
    secondary: 'bg-[#fff3dd] text-[#5d463a] hover:bg-[#fbe7b8]',
    ghost: 'bg-transparent text-[#3f2d22] hover:bg-[#fff4db]',
  };

  const sizes: Record<string, string> = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-5 text-base',
  };

  return (
    <button
      className={['inline-flex items-center justify-center rounded-full font-semibold transition', variants[variant], sizes[size], className].join(' ')}
      {...props}
    />
  );
}
