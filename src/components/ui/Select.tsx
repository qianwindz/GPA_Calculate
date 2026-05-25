import React from 'react';
import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
};

export function Select({ children, className, error, id, label, ...props }: SelectProps) {
  const selectId = id ?? props.name;
  const errorId = error && selectId ? `${selectId}-error` : undefined;

  return (
    <div>
      <label className="block text-sm font-medium text-slate-800" htmlFor={selectId}>
        {label}
      </label>
      <select
        aria-describedby={errorId}
        aria-invalid={Boolean(error)}
        className={cn(
          'mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-950 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-100',
          className
        )}
        id={selectId}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <p className="mt-1 text-sm text-red-700" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
