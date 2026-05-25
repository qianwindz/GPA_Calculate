import Link from 'next/link';
import { tools } from '@/content/tools';
import { Container } from './Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur-xl">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link className="group inline-flex items-center gap-3 text-lg font-bold text-stone-950" href="/">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-stone-950 text-sm font-black text-amber-300 shadow-lg shadow-stone-950/10">
            G
          </span>
          <span>GPA Tools</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-2 text-sm font-medium text-stone-700">
            {tools.slice(0, 5).map((tool) => (
              <li key={tool.href}>
                <Link
                  className="block rounded-full px-3 py-2 transition-colors hover:bg-white hover:text-stone-950 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  href={tool.href}
                >
                  {tool.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
