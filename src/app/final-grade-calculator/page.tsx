import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Final Grade Calculator - Required Final Exam Score',
  description:
    'Find out what score you need on your final exam to reach your desired overall grade.',
  alternates: { canonical: '/final-grade-calculator' }
};

export default function FinalGradeCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">Final Grade Calculator</h1>
      <p className="mt-4 text-lg text-slate-700">
        Calculator UI will be implemented in the next phase.
      </p>
    </div>
  );
}
