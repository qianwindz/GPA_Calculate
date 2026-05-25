import type { Metadata } from 'next';
import { FinalGradeCalculator } from '@/components/calculators/FinalGradeCalculator';
import { ToolPage } from '@/components/content/ToolPage';

export const metadata: Metadata = {
  title: 'Final Grade Calculator - Required Final Exam Score',
  description:
    'Find out what score you need on your final exam to reach your desired overall grade.',
  alternates: { canonical: '/final-grade-calculator' }
};

export default function FinalGradeCalculatorPage() {
  return (
    <ToolPage
      title="Final Grade Calculator"
      intro="Use this final grade calculator to find out what score you need on your final exam to reach your desired overall grade."
      path="/final-grade-calculator"
      howItWorks={[
        'Enter your current course grade before the final.',
        'Enter the overall grade you want to finish with.',
        'Enter how much the final exam counts toward the course grade.'
      ]}
      formula="Required final score = (desired grade - current grade x (1 - final weight)) / final weight"
      example="If your current grade is 85%, your desired grade is 90%, and the final is worth 30%, you need 101.67% on the final."
      resultMeaning="A score over 100% usually means the target is not reachable without extra credit, a curve, or changed weighting."
      limitations="This assumes the current grade and final exam weight are already correct according to your syllabus."
      faqs={[
        {
          question: 'What does final exam weight mean?',
          answer: 'It is the percentage of your overall course grade that comes from the final exam.'
        },
        {
          question: 'What if the required final score is over 100%?',
          answer: 'That usually means your target grade is not reachable without extra credit or a grading curve.'
        },
        {
          question: 'What if the required final score is negative?',
          answer: 'That usually means you may already have enough points to reach your target grade.'
        },
        {
          question: 'Can I use this for any course?',
          answer: 'Yes, if your course uses percentage grades and a known final exam weight.'
        }
      ]}
      relatedTools={[
        { title: 'Grade Calculator', href: '/grade-calculator' },
        { title: 'Weighted Grade Calculator', href: '/weighted-grade-calculator' },
        { title: 'GPA Calculator', href: '/gpa-calculator' },
        { title: 'Home', href: '/' }
      ]}
    >
      <FinalGradeCalculator />
    </ToolPage>
  );
}
