import type { Metadata } from 'next';
import { WeightedGradeCalculator } from '@/components/calculators/WeightedGradeCalculator';
import { ToolPage } from '@/components/content/ToolPage';

export const metadata: Metadata = {
  title: 'Grade Calculator - Calculate Your Current Grade',
  description:
    'Free grade calculator for students. Calculate your weighted course grade from assignments, quizzes, and exams.',
  alternates: { canonical: '/grade-calculator' }
};

export default function GradeCalculatorPage() {
  return (
    <ToolPage
      title="Grade Calculator"
      intro="Use this grade calculator to calculate your current weighted grade from assignments, quizzes, exams, and projects."
      path="/grade-calculator"
      howItWorks={[
        'Enter each completed assessment with its score, maximum score, and weight.',
        'The calculator converts each score into a weighted contribution.',
        'It divides completed weighted points by completed weight to estimate your current grade.'
      ]}
      formula="Current grade = sum((score / max score) x weight) / sum(completed weights) x 100"
      example="A quiz scored 90/100 with 20% weight contributes 18 points. An exam scored 80/100 with 30% weight contributes 24 points. Current grade over 50% completed weight is 84%."
      resultMeaning="The result shows your current grade based only on completed weighted work. Missing weight tells you how much of the course is not represented yet."
      limitations="If your syllabus drops scores, curves grades, or uses category rules, use this as an estimate."
      faqs={[
        {
          question: 'What does weight mean?',
          answer: 'Weight is the percentage of the overall course grade assigned to an assessment or category.'
        },
        {
          question: 'Can scores be above the maximum score?',
          answer: 'Yes. The calculator allows that for extra credit and marks it in the result explanation.'
        },
        {
          question: 'What if total weight is over 100%?',
          answer: 'The calculator shows a warning because most courses should total 100%. Check your syllabus.'
        },
        {
          question: 'Does this calculate my final course grade?',
          answer: 'It calculates your current weighted grade from entered items. Use the final grade calculator for target final exam scores.'
        }
      ]}
      relatedTools={[
        { title: 'Final Grade Calculator', href: '/final-grade-calculator' },
        { title: 'Weighted Grade Calculator', href: '/weighted-grade-calculator' },
        { title: 'GPA Calculator', href: '/gpa-calculator' },
        { title: 'Home', href: '/' }
      ]}
    >
      <WeightedGradeCalculator />
    </ToolPage>
  );
}
