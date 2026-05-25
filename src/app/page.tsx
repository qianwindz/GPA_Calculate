import Link from 'next/link';
import { tools } from '@/content/tools';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Student grade tools
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Free GPA & Grade Calculators for Students
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Calculate your GPA, weighted grade, final exam score, and grade
          conversions instantly. No sign-up required.
        </p>
      </section>

      <section className="mt-12" aria-labelledby="popular-calculators">
        <h2 id="popular-calculators" className="text-2xl font-bold text-slate-950">
          Popular Calculators
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              href={tool.href}
              key={tool.href}
            >
              <h3 className="text-lg font-semibold text-slate-950">{tool.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            How to choose a calculator
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Use the GPA calculator for semester GPA, the grade calculator for
            weighted coursework, and the final grade calculator when you need a
            target score on an exam.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            GPA and grade basics
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            These calculators provide general estimates. Schools may use
            different grade scales, weighting rules, or transcript policies.
          </p>
        </div>
      </section>
    </div>
  );
}
