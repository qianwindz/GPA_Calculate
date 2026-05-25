import type { Metadata } from 'next';
import { WeightedGradeCalculator } from '@/components/calculators/WeightedGradeCalculator';
import { ToolPage } from '@/components/content/ToolPage';

export const metadata: Metadata = {
  title: 'Weighted Grade Calculator',
  description: 'Calculate a weighted course grade from assessment scores and weights.',
  alternates: { canonical: '/weighted-grade-calculator' }
};

export default function WeightedGradeCalculatorPage() {
  return (
    <ToolPage
      title="Weighted Grade Calculator"
      intro="Calculate a weighted course grade from assignments, quizzes, exams, and projects with different percentage weights."
      path="/weighted-grade-calculator"
      howItWorks={[
        'Add each assessment that should count toward the course grade.',
        'Enter the score, maximum score, and percentage weight for each item.',
        'Review the current weighted grade, completed weight, and missing weight.'
      ]}
      formula="Weighted contribution = (score / max score) x weight"
      example="A 45/50 project worth 25% contributes 22.5 percentage points toward the course grade."
      resultMeaning="The calculator shows how completed assessments combine based on their weights."
      limitations="It does not automatically handle dropped assignments or curved grading unless you adjust the entered scores yourself."
      faqs={[
        {
          question: 'Is this different from the grade calculator?',
          answer: 'It uses the same weighted-grade logic and is useful when your course has clearly weighted assessments.'
        },
        {
          question: 'Should all weights add up to 100?',
          answer: 'For a complete course grade, yes. If only some work is completed, total entered weight may be below 100.'
        },
        {
          question: 'Can I enter categories instead of individual assignments?',
          answer: 'Yes. You can enter a category average as the score and the category percentage as the weight.'
        }
      ]}
      relatedTools={[
        { title: 'Grade Calculator', href: '/grade-calculator' },
        { title: 'Final Grade Calculator', href: '/final-grade-calculator' },
        { title: 'GPA Calculator', href: '/gpa-calculator' },
        { title: 'Home', href: '/' }
      ]}
    >
      <WeightedGradeCalculator />
    </ToolPage>
  );
}
