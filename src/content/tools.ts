export type Tool = {
  title: string;
  href: string;
  description: string;
  priority: 'P0' | 'P1' | 'P2';
};

export const tools: Tool[] = [
  {
    title: 'GPA Calculator',
    href: '/gpa-calculator',
    description: 'Estimate your grade point average from course credits and letter grades.',
    priority: 'P0'
  },
  {
    title: 'Grade Calculator',
    href: '/grade-calculator',
    description: 'Calculate your current weighted course grade from assignments and exams.',
    priority: 'P0'
  },
  {
    title: 'Final Grade Calculator',
    href: '/final-grade-calculator',
    description: 'Find the final exam score you need to reach your desired course grade.',
    priority: 'P0'
  },
  {
    title: 'Weighted Grade Calculator',
    href: '/weighted-grade-calculator',
    description: 'Combine weighted assessments into one course grade estimate.',
    priority: 'P1'
  },
  {
    title: 'Target GPA Calculator',
    href: '/target-gpa-calculator',
    description: 'Estimate the GPA you need in future credits to reach a target GPA.',
    priority: 'P1'
  },
  {
    title: 'Percentage to GPA Converter',
    href: '/percentage-to-gpa-calculator',
    description: 'Convert a percentage grade to a general 4.0 GPA estimate.',
    priority: 'P1'
  },
  {
    title: 'CGPA to GPA Converter',
    href: '/cgpa-to-gpa-calculator',
    description: 'Convert a 10-point CGPA to a general 4.0 GPA estimate.',
    priority: 'P1'
  }
];

export const publicRoutes = [
  '/',
  ...tools.map((tool) => tool.href),
  '/about',
  '/privacy',
  '/contact'
];
