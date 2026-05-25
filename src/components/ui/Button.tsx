import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'bg-stone-950 text-white shadow-lg shadow-stone-950/10 hover:bg-stone-800 disabled:bg-stone-300',
  secondary:
    'border border-stone-300 bg-white text-stone-950 hover:border-amber-300 hover:bg-amber-50 disabled:text-stone-400',
  ghost: 'text-stone-700 hover:bg-stone-100 disabled:text-stone-400'
};

export function Button({
  className,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:cursor-not-allowed',
        variants[variant],
        className
      )}
      type={type}
      {...props}
    />
  );
}
