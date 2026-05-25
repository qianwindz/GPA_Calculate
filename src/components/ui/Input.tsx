import React from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ className, error, id, label, ...props }: InputProps) {
  const inputId = id ?? props.name;
  const errorId = error && inputId ? `${inputId}-error` : undefined;

  return (
    <div>
      <label className="block text-sm font-semibold text-stone-800" htmlFor={inputId}>
        {label}
      </label>
      <input
        aria-describedby={errorId}
        aria-invalid={Boolean(error)}
        className={cn(
          'mt-1 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-950 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-100',
          className
        )}
        id={inputId}
        {...props}
      />
      {error ? (
        <p className="mt-1 text-sm text-red-700" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
