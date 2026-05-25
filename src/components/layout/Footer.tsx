import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>Free student calculators. No account required.</p>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-4">
            <li>
              <Link className="hover:text-blue-700" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-700" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-700" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
