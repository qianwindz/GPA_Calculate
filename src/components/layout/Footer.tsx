import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200/80 bg-white/70">
      <Container className="flex flex-col gap-4 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
        <p>Free student calculators. Private, fast, and account-free.</p>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-4">
            <li>
              <Link className="font-medium hover:text-amber-700" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="font-medium hover:text-amber-700" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="font-medium hover:text-amber-700" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
