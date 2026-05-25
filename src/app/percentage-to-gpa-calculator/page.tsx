import type { Metadata } from 'next';
import { PercentageToGpaConverter } from '@/components/calculators/PercentageToGpaConverter';
import { ToolPage } from '@/components/content/ToolPage';
import { conversionDisclaimer } from '@/content/grade-scales';

export const metadata: Metadata = {
  title: 'Percentage to GPA Converter',
  description: 'Convert a percentage grade to a general 4.0 GPA estimate.',
  alternates: { canonical: '/percentage-to-gpa-calculator' }
};

export default function PercentageToGpaCalculatorPage() {
  return (
    <ToolPage
      title="Percentage to GPA Converter"
      intro="Convert a percentage grade to a general 4.0 GPA estimate for quick planning and comparison."
      path="/percentage-to-gpa-calculator"
      howItWorks={[
        'Enter a percentage grade from 0 to 100.',
        'The converter maps the percentage to a general 4.0 GPA band.',
        'Use the result as an estimate, not an official transcript conversion.'
      ]}
      formula="90-100 = 4.0, 85-89 = 3.7, 80-84 = 3.3, 75-79 = 3.0"
      example="A percentage grade of 82% converts to an estimated GPA of 3.3 on the general scale used here."
      resultMeaning="The converted GPA is a rough estimate that can help compare percentage grades with 4.0-scale grades."
      limitations={conversionDisclaimer}
      faqs={[
        {
          question: 'Is percentage to GPA conversion universal?',
          answer: 'No. Conversion rules vary by school, country, and admissions office.'
        },
        {
          question: 'Can I use this for admissions?',
          answer: 'Use it only as a rough estimate. Always check the official policy of the institution reviewing your grades.'
        },
        {
          question: 'What GPA is 90%?',
          answer: 'On this general estimate scale, 90% to 100% maps to 4.0.'
        }
      ]}
      relatedTools={[
        { title: 'GPA Calculator', href: '/gpa-calculator' },
        { title: 'CGPA to GPA Converter', href: '/cgpa-to-gpa-calculator' },
        { title: 'Target GPA Calculator', href: '/target-gpa-calculator' },
        { title: 'Home', href: '/' }
      ]}
    >
      <PercentageToGpaConverter />
    </ToolPage>
  );
}
