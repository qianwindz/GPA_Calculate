# AGENTS.md

## Project Overview

This project is an international student GPA and grade calculator website.

The goal is to build a fast, SEO-friendly, ad-monetizable tool website with multiple calculators:

- GPA Calculator
- Grade Calculator
- Final Grade Calculator
- Weighted Grade Calculator
- Target GPA Calculator
- Percentage to GPA Converter
- CGPA to GPA Converter
- Letter Grade to GPA Converter

The site should be simple, accurate, mobile-friendly, and optimized for organic search.

Before making large changes, read `PROJECT_PLAN.md`.

---

## Tech Stack

Use the following stack unless the user explicitly asks otherwise:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components where suitable
- Client Components only for interactive calculators
- Static generation for SEO pages where possible
- No backend database for MVP
- JSON or TypeScript config files for grading scales

---

## Package Manager

Use `pnpm`.

Common commands:

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm test