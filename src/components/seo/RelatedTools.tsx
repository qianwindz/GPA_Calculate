import Link from 'next/link';

type RelatedTool = {
  title: string;
  href: string;
};

type RelatedToolsProps = {
  tools: RelatedTool[];
};

export function RelatedTools({ tools }: RelatedToolsProps) {
  return (
    <section className="mt-10" aria-labelledby="related-tools">
      <h2 id="related-tools" className="text-2xl font-bold text-slate-950">
        Related tools
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {tools.map((tool) => (
          <Link
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-blue-300 hover:text-blue-700"
            href={tool.href}
            key={tool.href}
          >
            {tool.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
