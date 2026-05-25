import Link from 'next/link';
import { tools } from '@/content/tools';

export default function HomePage() {
  const featuredTools = tools.filter((tool) => tool.priority === 'P0');
  const otherTools = tools.filter((tool) => tool.priority !== 'P0');

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-bold uppercase tracking-wide text-amber-800">
            Student grade tools
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-stone-950 sm:text-6xl">
            Free GPA & Grade Calculators for Students
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
            Calculate GPA, weighted grades, final exam scores, and academic
            conversions instantly. Built for international students who need
            clear estimates without creating an account.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex rounded-md bg-stone-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-stone-950/10 transition-colors hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              href="/gpa-calculator"
            >
              Start with GPA
            </Link>
            <Link
              className="inline-flex rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-bold text-stone-950 transition-colors hover:border-amber-300 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              href="/final-grade-calculator"
            >
              Calculate final score
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-stone-200/80 bg-white/80 p-5 shadow-2xl shadow-stone-950/[0.07] ring-1 ring-white/80 backdrop-blur">
          <div className="rounded-md bg-stone-950 p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              Quick estimate
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-xs text-stone-300">Semester GPA</p>
                <p className="mt-2 text-3xl font-black">3.72</p>
              </div>
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-xs text-stone-300">Final needed</p>
                <p className="mt-2 text-3xl font-black">86%</p>
              </div>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-4/5 rounded-full bg-amber-300" />
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-stone-600">
            Private browser-side calculations for GPA planning, coursework
            weighting, and common grade conversions.
          </p>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="popular-calculators">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-amber-700">
              Core calculators
            </p>
            <h2
              id="popular-calculators"
              className="mt-2 text-3xl font-black text-stone-950"
            >
              Popular Calculators
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-600">
            Choose the tool that matches the academic question you are trying
            to answer.
          </p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <Link
              className="group rounded-lg border border-stone-200/80 bg-white/90 p-6 shadow-xl shadow-stone-950/[0.04] ring-1 ring-white/70 transition-colors hover:border-amber-300 hover:bg-amber-50/40"
              href={tool.href}
              key={tool.href}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black text-stone-950">
                  {tool.title}
                </h3>
                <span className="rounded-full bg-stone-950 px-2.5 py-1 text-xs font-bold text-amber-300">
                  {tool.priority}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {tool.description}
              </p>
              <p className="mt-5 text-sm font-bold text-amber-700 transition-colors group-hover:text-stone-950">
                Open calculator
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="conversion-tools">
        <h2 id="conversion-tools" className="text-2xl font-black text-stone-950">
          GPA conversion tools
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherTools.map((tool) => (
            <Link
              className="rounded-lg border border-stone-200 bg-white/80 p-5 transition-colors hover:border-amber-300 hover:bg-white hover:shadow-lg hover:shadow-stone-950/[0.04]"
              href={tool.href}
              key={tool.href}
            >
              <h3 className="text-lg font-bold text-stone-950">{tool.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-stone-200 bg-white/70 p-6">
          <h2 className="text-2xl font-black text-stone-950">
            How to choose a calculator
          </h2>
          <p className="mt-3 leading-7 text-stone-700">
            Use the GPA calculator for semester GPA, the grade calculator for
            weighted coursework, and the final grade calculator when you need a
            target score on an exam.
          </p>
        </div>
        <div className="rounded-lg border border-stone-200 bg-white/70 p-6">
          <h2 className="text-2xl font-black text-stone-950">
            GPA and grade basics
          </h2>
          <p className="mt-3 leading-7 text-stone-700">
            These calculators provide general estimates. Schools may use
            different grade scales, weighting rules, or transcript policies.
          </p>
        </div>
      </section>
    </div>
  );
}
