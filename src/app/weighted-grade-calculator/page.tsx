import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weighted Grade Calculator',
  description: 'Calculate a weighted course grade from assessment scores and weights.',
  alternates: { canonical: '/weighted-grade-calculator' }
};

export default function WeightedGradeCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">Weighted Grade Calculator</h1>
      <p className="mt-4 text-lg text-slate-700">
        Calculator UI will be implemented in the next phase.
      </p>
    </div>
  );
}
