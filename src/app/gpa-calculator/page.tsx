import type { Metadata } from 'next';
import { GpaCalculator } from '@/components/calculators/GpaCalculator';
import { ToolPage } from '@/components/content/ToolPage';

export const metadata: Metadata = {
  title: 'GPA Calculator - Calculate Your Grade Point Average',
  description:
    'Free GPA calculator for students. Enter courses, credits, and grades to calculate your GPA instantly.',
  alternates: { canonical: '/gpa-calculator' }
};

export default function GpaCalculatorPage() {
  return (
    <ToolPage
      title="GPA Calculator"
      intro="Use this GPA calculator to estimate your grade point average based on your courses, credits, and letter grades."
      path="/gpa-calculator"
      howItWorks={[
        'Enter each course name, credit value, and letter grade.',
        'The calculator converts each letter grade to grade points on a general 4.0 scale.',
        'It multiplies grade points by credits, then divides by total credits.'
      ]}
      formula="GPA = sum(grade points x credits) / sum(credits)"
      example="Course 1: A for 3 credits gives 12 grade points. Course 2: B for 4 credits gives 12 grade points. GPA = 24 / 7 = 3.43."
      resultMeaning="Your GPA is a weighted average of your course grades. Courses with more credits affect the result more than courses with fewer credits."
      limitations="This is a general estimate. Your school may use a different GPA scale or transcript policy."
      faqs={[
        {
          question: 'What is a GPA calculator?',
          answer: 'A GPA calculator estimates your grade point average using your course credits and grades.'
        },
        {
          question: 'How is GPA calculated?',
          answer: "GPA is usually calculated by multiplying each course's grade points by its credits, adding the results, and dividing by total credits."
        },
        {
          question: 'Is this calculator accurate for every school?',
          answer: 'It provides a general estimate. Schools may use different GPA scales and grading policies.'
        },
        {
          question: 'Does this site store my grades?',
          answer: 'No. The calculator runs in your browser and does not require an account.'
        }
      ]}
      relatedTools={[
        { title: 'Target GPA Calculator', href: '/target-gpa-calculator' },
        { title: 'Percentage to GPA Converter', href: '/percentage-to-gpa-calculator' },
        { title: 'CGPA to GPA Converter', href: '/cgpa-to-gpa-calculator' },
        { title: 'Home', href: '/' }
      ]}
    >
      <GpaCalculator />
    </ToolPage>
  );
}
