import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About this free GPA and grade calculator website.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">About</h1>
      <p className="mt-4 leading-7 text-slate-700">
        GPA Tools is a free calculator hub for students who need quick estimates
        for GPA, weighted grades, final exam scores, and grade conversions.
      </p>
    </div>
  );
}
