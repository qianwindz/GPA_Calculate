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
    <Container className="py-10">
      <JsonLd data={jsonLd} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          <section>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              {intro}
            </p>
          </section>

          <section className="mt-8">{children}</section>

          <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              How this calculator works
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              {howItWorks.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">Formula</h2>
            <pre className="mt-4 overflow-x-auto rounded-md bg-slate-950 p-4 text-sm text-white">
              <code>{formula}</code>
            </pre>
          </section>

          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">Example</h2>
            <p className="mt-3 leading-7 text-slate-700">{example}</p>
          </section>

          <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              What the result means
            </h2>
            <p className="mt-3 leading-7 text-slate-700">{resultMeaning}</p>
            {limitations ? (
              <p className="mt-3 leading-7 text-slate-700">{limitations}</p>
            ) : null}
          </section>

          <FaqSection items={faqs} />
          <RelatedTools tools={relatedTools} />
        </article>

        <aside className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 lg:sticky lg:top-6 lg:self-start">
          <h2 className="font-semibold text-slate-950">Privacy note</h2>
          <p className="mt-2">
            Your inputs are calculated in the browser. This MVP does not save
            your grades to a server or require an account.
          </p>
        </aside>
      </div>
    </Container>
  );
}
