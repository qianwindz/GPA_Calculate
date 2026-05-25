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
  neutral: 'border-blue-200 bg-blue-50 text-blue-950',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-950',
  warning: 'border-amber-200 bg-amber-50 text-amber-950'
};

export function ResultBox({
  description,
  status = 'neutral',
  title,
  value
}: ResultBoxProps) {
  return (
    <div className={cn('rounded-lg border p-5', statusClasses[status])}>
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-2 text-3xl font-bold">{value}</div>
      {description ? <p className="mt-2 text-sm leading-6">{description}</p> : null}
    </div>
  );
}
