import type { Metadata } from 'next';
import { CgpaToGpaConverter } from '@/components/calculators/CgpaToGpaConverter';
import { ToolPage } from '@/components/content/ToolPage';
import { conversionDisclaimer } from '@/content/grade-scales';

export const metadata: Metadata = {
  title: 'CGPA to GPA Converter',
  description: 'Convert a 10-point CGPA to a general 4.0 GPA estimate.',
  alternates: { canonical: '/cgpa-to-gpa-calculator' }
};

export default function CgpaToGpaCalculatorPage() {
  return (
    <ToolPage
      title="CGPA to GPA Converter"
      intro="Convert a 10-point CGPA to a general 4.0 GPA estimate for quick academic planning."
      path="/cgpa-to-gpa-calculator"
      howItWorks={[
        'Enter your CGPA on a 10-point scale.',
        'The converter divides the CGPA by 10 and multiplies by 4.',
        'Use the output as a general estimate only.'
      ]}
      formula="GPA = (CGPA / 10) x 4"
      example="A 10-point CGPA of 8.5 converts to an estimated 4.0-scale GPA of 3.40."
      resultMeaning="The result approximates your CGPA on a 4.0 scale for quick comparison."
      limitations={conversionDisclaimer}
      faqs={[
        {
          question: 'Does this support 7-point or 5-point CGPA?',
          answer: 'The MVP supports 10-point CGPA conversion only.'
        },
        {
          question: 'Is this official?',
          answer: 'No. It is a general estimate and may not match a university or admissions office policy.'
        },
        {
          question: 'What is 8.5 CGPA on a 4.0 scale?',
          answer: 'Using this simple estimate, 8.5 out of 10 converts to 3.40 out of 4.0.'
        }
      ]}
      relatedTools={[
        { title: 'Percentage to GPA Converter', href: '/percentage-to-gpa-calculator' },
        { title: 'GPA Calculator', href: '/gpa-calculator' },
        { title: 'Target GPA Calculator', href: '/target-gpa-calculator' },
        { title: 'Home', href: '/' }
      ]}
    >
      <CgpaToGpaConverter />
    </ToolPage>
  );
}
