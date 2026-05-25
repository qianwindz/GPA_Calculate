import Link from 'next/link';
import { tools } from '@/content/tools';
import { Container } from './Container';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link className="text-lg font-bold text-slate-950" href="/">
          GPA Tools
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-3 text-sm text-slate-700">
            {tools.slice(0, 5).map((tool) => (
              <li key={tool.href}>
                <Link className="hover:text-blue-700" href={tool.href}>
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
