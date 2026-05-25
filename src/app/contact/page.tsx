import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact GPA Tools.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">Contact</h1>
      <p className="mt-4 leading-7 text-slate-700">
        For feedback or corrections, contact us at hello@example.com.
      </p>
    </div>
  );
}
