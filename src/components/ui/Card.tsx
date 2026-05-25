import React from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-stone-200/80 bg-white/90 p-5 shadow-xl shadow-stone-950/[0.04] ring-1 ring-white/70 backdrop-blur',
        className
      )}
      {...props}
    />
  );
}
