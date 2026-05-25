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
      <h2 id="related-tools" className="text-2xl font-black text-stone-950">
        Related tools
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {tools.map((tool) => (
          <Link
            className="rounded-md border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-800 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-stone-950"
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
