import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GPA Calculator - Calculate Your Grade Point Average',
  description:
    'Free GPA calculator for students. Enter courses, credits, and grades to calculate your GPA instantly.',
  alternates: { canonical: '/gpa-calculator' }
};

export default function GpaCalculatorPage() {
  return <Placeholder title="GPA Calculator" />;
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">{title}</h1>
      <p className="mt-4 text-lg text-slate-700">
        Calculator UI will be implemented in the next phase.
      </p>
    </div>
  );
}
