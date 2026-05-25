import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade Calculator - Calculate Your Current Grade',
  description:
    'Free grade calculator for students. Calculate your weighted course grade from assignments, quizzes, and exams.',
  alternates: { canonical: '/grade-calculator' }
};

export default function GradeCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">Grade Calculator</h1>
      <p className="mt-4 text-lg text-slate-700">
        Calculator UI will be implemented in the next phase.
      </p>
    </div>
  );
}
