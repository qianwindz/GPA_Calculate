'use client';

import { useMemo, useState } from 'react';
import { calculateRequiredFutureGpa } from '@/lib/calculators/target-gpa';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ResultBox } from '@/components/ui/ResultBox';

export function TargetGpaCalculator() {
  const [currentGpa, setCurrentGpa] = useState(3.2);
  const [currentCredits, setCurrentCredits] = useState(60);
  const [targetGpa, setTargetGpa] = useState(3.5);
  const [futureCredits, setFutureCredits] = useState(30);

  const result = useMemo(() => {
    try {
      return {
        value: calculateRequiredFutureGpa({
          currentGpa,
          currentCredits,
          targetGpa,
          futureCredits
        }),
        error: ''
      };
    } catch (error) {
      return { value: null, error: error instanceof Error ? error.message : 'Invalid input.' };
    }
  }, [currentGpa, currentCredits, targetGpa, futureCredits]);

  return (
    <Card>
      <div className="grid gap-4 md:grid-cols-4">
        <Input
          error={currentGpa < 0 || currentGpa > 4 ? 'Use 0-4.' : undefined}
          label="Current GPA"
          max={4}
          min={0}
          step={0.01}
          type="number"
          value={currentGpa}
          onChange={(event) => setCurrentGpa(Number(event.target.value))}
        />
        <Input
          error={currentCredits < 0 ? 'Cannot be negative.' : undefined}
          label="Current credits"
          min={0}
          type="number"
          value={currentCredits}
          onChange={(event) => setCurrentCredits(Number(event.target.value))}
        />
        <Input
          error={targetGpa < 0 || targetGpa > 4 ? 'Use 0-4.' : undefined}
          label="Target GPA"
          max={4}
          min={0}
          step={0.01}
          type="number"
          value={targetGpa}
          onChange={(event) => setTargetGpa(Number(event.target.value))}
        />
        <Input
          error={futureCredits <= 0 ? 'Must be above 0.' : undefined}
          label="Future credits"
          min={1}
          type="number"
          value={futureCredits}
          onChange={(event) => setFutureCredits(Number(event.target.value))}
        />
      </div>

      <div className="mt-6">
        {result.value ? (
          <ResultBox
            description={result.value.message}
            status={result.value.isPossibleOnFourPointScale ? 'success' : 'warning'}
            title="Required future GPA"
            value={result.value.requiredFutureGpa.toFixed(2)}
          />
        ) : (
          <ResultBox
            description="Fix the input values to calculate your target GPA plan."
            status="warning"
            title="Input error"
            value={result.error}
          />
        )}
      </div>
    </Card>
  );
}
