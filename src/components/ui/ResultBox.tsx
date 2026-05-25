import React from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ResultBoxProps = {
  title: string;
  value: ReactNode;
  description?: string;
  status?: 'neutral' | 'success' | 'warning';
};

const statusClasses = {
  neutral: 'border-amber-200 bg-gradient-to-br from-amber-50 to-white text-stone-950',
  success: 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-white text-emerald-950',
  warning: 'border-amber-300 bg-gradient-to-br from-amber-100 to-white text-amber-950'
};

export function ResultBox({
  description,
  status = 'neutral',
  title,
  value
}: ResultBoxProps) {
  return (
    <div className={cn('rounded-lg border p-5 shadow-inner shadow-white/70', statusClasses[status])}>
      <p className="text-sm font-semibold uppercase tracking-wide">{title}</p>
      <div className="mt-2 text-4xl font-black tracking-tight">{value}</div>
      {description ? <p className="mt-2 text-sm leading-6">{description}</p> : null}
    </div>
  );
}
