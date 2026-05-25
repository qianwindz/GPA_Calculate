import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CGPA to GPA Converter',
  description: 'Convert a 10-point CGPA to a general 4.0 GPA estimate.',
  alternates: { canonical: '/cgpa-to-gpa-calculator' }
};

export default function CgpaToGpaCalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">CGPA to GPA Converter</h1>
      <p className="mt-4 text-lg text-slate-700">
        Calculator UI will be implemented in the next phase.
      </p>
    </div>
  );
}
