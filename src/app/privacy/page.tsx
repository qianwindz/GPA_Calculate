import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for GPA Tools.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold text-slate-950">Privacy Policy</h1>
      <p className="mt-4 leading-7 text-slate-700">
        This MVP does not store grade inputs on a server and does not require an
        account. Calculator results are intended as estimates only.
      </p>
    </div>
  );
}
