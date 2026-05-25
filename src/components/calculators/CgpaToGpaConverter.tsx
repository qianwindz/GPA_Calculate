'use client';

import { useMemo, useState } from 'react';
import { conversionDisclaimer } from '@/content/grade-scales';
import { convertCgpaToGpa } from '@/lib/calculators/conversions';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ResultBox } from '@/components/ui/ResultBox';

export function CgpaToGpaConverter() {
  const [cgpa, setCgpa] = useState(8.5);

  const result = useMemo(() => {
    try {
      return { value: convertCgpaToGpa(cgpa, 10), error: '' };
    } catch (error) {
      return { value: null, error: error instanceof Error ? error.message : 'Invalid input.' };
    }
  }, [cgpa]);

  return (
    <Card>
      <Input
        error={cgpa < 0 || cgpa > 10 ? 'Use a value from 0 to 10.' : undefined}
        label="10-point CGPA"
        max={10}
        min={0}
        step={0.01}
        type="number"
        value={cgpa}
        onChange={(event) => setCgpa(Number(event.target.value))}
      />
      <div className="mt-6">
        <ResultBox
          description={result.value === null ? 'Fix the CGPA value.' : conversionDisclaimer}
          status={result.value === null ? 'warning' : 'neutral'}
          title="Estimated 4.0 GPA"
          value={result.value === null ? result.error : result.value.toFixed(2)}
        />
      </div>
    </Card>
  );
}
