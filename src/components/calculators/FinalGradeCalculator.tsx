'use client';

import { useMemo, useState } from 'react';
import { calculateRequiredFinalScore } from '@/lib/calculators/final-grade';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ResultBox } from '@/components/ui/ResultBox';

export function FinalGradeCalculator() {
  const [currentGrade, setCurrentGrade] = useState(85);
  const [desiredGrade, setDesiredGrade] = useState(90);
  const [finalWeight, setFinalWeight] = useState(30);

  const result = useMemo(() => {
    try {
      return {
        value: calculateRequiredFinalScore({
          currentGrade,
          desiredGrade,
          finalWeight
        }),
        error: ''
      };
    } catch (error) {
      return { value: null, error: error instanceof Error ? error.message : 'Invalid input.' };
    }
  }, [currentGrade, desiredGrade, finalWeight]);

  return (
    <Card>
      <div className="grid gap-4 md:grid-cols-3">
        <Input
          label="Current grade (%)"
          type="number"
          value={currentGrade}
          onChange={(event) => setCurrentGrade(Number(event.target.value))}
        />
        <Input
          label="Desired grade (%)"
          type="number"
          value={desiredGrade}
          onChange={(event) => setDesiredGrade(Number(event.target.value))}
        />
        <Input
          error={finalWeight <= 0 || finalWeight > 100 ? 'Use a value from 1 to 100.' : undefined}
          label="Final exam weight (%)"
          max={100}
          min={1}
          type="number"
          value={finalWeight}
          onChange={(event) => setFinalWeight(Number(event.target.value))}
        />
      </div>

      <div className="mt-6">
        {result.value ? (
          <ResultBox
            description={result.value.message}
            status={result.value.isPossible ? 'success' : 'warning'}
            title="Required final exam score"
            value={`${result.value.requiredFinalScore.toFixed(2)}%`}
          />
        ) : (
          <ResultBox
            description="Fix the input values to calculate the required final score."
            status="warning"
            title="Input error"
            value={result.error}
          />
        )}
      </div>
    </Card>
  );
}
