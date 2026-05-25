'use client';

import { useMemo, useState } from 'react';
import { conversionDisclaimer } from '@/content/grade-scales';
import { convertPercentageToGpa } from '@/lib/calculators/conversions';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ResultBox } from '@/components/ui/ResultBox';

export function PercentageToGpaConverter() {
  const [percentage, setPercentage] = useState(82);

  const result = useMemo(() => {
    try {
      return { value: convertPercentageToGpa(percentage), error: '' };
    } catch (error) {
      return { value: null, error: error instanceof Error ? error.message : 'Invalid input.' };
    }
  }, [percentage]);

  return (
    <Card>
      <Input
        error={percentage < 0 || percentage > 100 ? 'Use a value from 0 to 100.' : undefined}
        label="Percentage grade"
        max={100}
        min={0}
        type="number"
        value={percentage}
        onChange={(event) => setPercentage(Number(event.target.value))}
      />
      <div className="mt-6">
        <ResultBox
          description={result.value === null ? 'Fix the percentage value.' : conversionDisclaimer}
          status={result.value === null ? 'warning' : 'neutral'}
          title="Estimated 4.0 GPA"
          value={result.value === null ? result.error : result.value.toFixed(1)}
        />
      </div>
    </Card>
  );
}
