import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Target GPA Calculator',
  description: 'Estimate the future GPA required to reach your target cumulative GPA.',
  alternates: { canonical: '/target-gpa-calculator' }
};

export default function TargetGpaCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">Target GPA Calculator</h1>
      <p className="mt-4 text-lg text-slate-700">
        Calculator UI will be implemented in the next phase.
      </p>
    </div>
  );
}
