import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';
import { FaqSection, type FaqItem } from '@/components/seo/FaqSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { RelatedTools } from '@/components/seo/RelatedTools';
import { absoluteUrl } from '@/lib/seo/site';

type RelatedTool = {
  title: string;
  href: string;
};

type ToolPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
  howItWorks: string[];
  formula: string;
  example: string;
  resultMeaning: string;
  limitations?: string;
  faqs: FaqItem[];
  relatedTools: RelatedTool[];
  path: string;
};

export function ToolPage({
  children,
  example,
  faqs,
  formula,
  howItWorks,
  intro,
  limitations,
  path,
  relatedTools,
  resultMeaning,
  title
}: ToolPageProps) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: title,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      url: absoluteUrl(path),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: absoluteUrl('/')
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: absoluteUrl(path)
        }
      ]
    }
  ];

  return (
    <Container className="py-10 lg:py-14">
      <JsonLd data={jsonLd} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          <section className="rounded-lg border border-stone-200/80 bg-white/75 p-6 shadow-xl shadow-stone-950/[0.04] ring-1 ring-white/70 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-amber-700">
              Free academic calculator
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
              {intro}
            </p>
          </section>

          <section className="mt-8">{children}</section>

          <section className="mt-10 rounded-lg border border-stone-200 bg-white/85 p-6 shadow-lg shadow-stone-950/[0.03]">
            <h2 className="text-2xl font-black text-stone-950">
              How this calculator works
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-stone-700 marker:font-bold marker:text-amber-700">
              {howItWorks.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-6 rounded-lg border border-stone-200 bg-white/85 p-6 shadow-lg shadow-stone-950/[0.03]">
            <h2 className="text-2xl font-black text-stone-950">Formula</h2>
            <pre className="mt-4 overflow-x-auto rounded-md bg-stone-950 p-4 text-sm text-amber-50">
              <code>{formula}</code>
            </pre>
          </section>

          <section className="mt-6 rounded-lg border border-stone-200 bg-white/85 p-6 shadow-lg shadow-stone-950/[0.03]">
            <h2 className="text-2xl font-black text-stone-950">Example</h2>
            <p className="mt-3 leading-7 text-stone-700">{example}</p>
          </section>

          <section className="mt-6 rounded-lg border border-stone-200 bg-white/85 p-6 shadow-lg shadow-stone-950/[0.03]">
            <h2 className="text-2xl font-black text-stone-950">
              What the result means
            </h2>
            <p className="mt-3 leading-7 text-stone-700">{resultMeaning}</p>
            {limitations ? (
              <p className="mt-3 leading-7 text-stone-700">{limitations}</p>
            ) : null}
          </section>

          <FaqSection items={faqs} />
          <RelatedTools tools={relatedTools} />
        </article>

        <aside className="rounded-lg border border-stone-800 bg-stone-950 p-5 text-sm leading-6 text-stone-200 shadow-2xl shadow-stone-950/10 lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-bold text-white">Privacy note</h2>
          <p className="mt-2">
            Your inputs are calculated in the browser. This MVP does not save
            your grades to a server or require an account.
          </p>
        </aside>
      </div>
    </Container>
  );
}
