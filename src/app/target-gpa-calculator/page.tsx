import type { Metadata } from 'next';
import { TargetGpaCalculator } from '@/components/calculators/TargetGpaCalculator';
import { ToolPage } from '@/components/content/ToolPage';

export const metadata: Metadata = {
  title: 'Target GPA Calculator',
  description: 'Estimate the future GPA required to reach your target cumulative GPA.',
  alternates: { canonical: '/target-gpa-calculator' }
};

export default function TargetGpaCalculatorPage() {
  return (
    <ToolPage
      title="Target GPA Calculator"
      intro="Estimate the average GPA you need in future credits to reach a target cumulative GPA."
      path="/target-gpa-calculator"
      howItWorks={[
        'Enter your current GPA and completed credits.',
        'Enter your target cumulative GPA.',
        'Enter how many future credits you plan to take.'
      ]}
      formula="Required future GPA = ((target GPA x total credits) - (current GPA x current credits)) / future credits"
      example="Current GPA 3.20 over 60 credits, target GPA 3.50, and 30 future credits requires a 4.10 future GPA."
      resultMeaning="If the required future GPA is above 4.0, the target is usually not reachable on a standard 4.0 scale with the planned credits."
      limitations="This calculator assumes all credits are weighted equally and uses a standard 4.0 GPA scale."
      faqs={[
        {
          question: 'What is a target GPA?',
          answer: 'It is the cumulative GPA you want to reach after completing future coursework.'
        },
        {
          question: 'What if the required GPA is over 4.0?',
          answer: 'That usually means the goal is not reachable with the future credits entered on a standard 4.0 scale.'
        },
        {
          question: 'Can this help me plan future semesters?',
          answer: 'Yes. Change future credits to compare different course-load scenarios.'
        }
      ]}
      relatedTools={[
        { title: 'GPA Calculator', href: '/gpa-calculator' },
        { title: 'Percentage to GPA Converter', href: '/percentage-to-gpa-calculator' },
        { title: 'CGPA to GPA Converter', href: '/cgpa-to-gpa-calculator' },
        { title: 'Home', href: '/' }
      ]}
    >
      <TargetGpaCalculator />
    </ToolPage>
  );
}
