'use client';

import { type ChangeEvent, useMemo, useState } from 'react';
import {
  calculateWeightedGrade,
  type AssessmentInput
} from '@/lib/calculators/grade';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ResultBox } from '@/components/ui/ResultBox';

function createAssessment(index: number): AssessmentInput {
  return {
    id: `assessment-${index}-${Date.now()}`,
    name: `Assessment ${index}`,
    score: 90,
    maxScore: 100,
    weight: 20
  };
}

export function WeightedGradeCalculator() {
  const [items, setItems] = useState<AssessmentInput[]>([
    { id: 'assessment-1', name: 'Assessment 1', score: 90, maxScore: 100, weight: 20 },
    { id: 'assessment-2', name: 'Assessment 2', score: 80, maxScore: 100, weight: 30 }
  ]);

  const result = useMemo(() => {
    try {
      return { value: calculateWeightedGrade(items), error: '' };
    } catch (error) {
      return { value: null, error: error instanceof Error ? error.message : 'Invalid input.' };
    }
  }, [items]);

  const updateItem = (id: string, patch: Partial<AssessmentInput>) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );
  };

  const numberChange =
    (id: string, key: keyof Pick<AssessmentInput, 'score' | 'maxScore' | 'weight'>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      updateItem(id, { [key]: Number(event.target.value) });
    };

  return (
    <Card>
      <div className="space-y-4">
        {items.map((item) => (
          <div className="grid gap-3 md:grid-cols-[1fr_110px_110px_110px_auto]" key={item.id}>
            <Input
              label="Assessment"
              value={item.name}
              onChange={(event) => updateItem(item.id, { name: event.target.value })}
            />
            <Input
              error={item.score < 0 ? 'Cannot be negative.' : undefined}
              label="Score"
              min={0}
              type="number"
              value={item.score}
              onChange={numberChange(item.id, 'score')}
            />
            <Input
              error={item.maxScore <= 0 ? 'Must be above 0.' : undefined}
              label="Max"
              min={0.01}
              type="number"
              value={item.maxScore}
              onChange={numberChange(item.id, 'maxScore')}
            />
            <Input
              error={item.weight < 0 || item.weight > 100 ? 'Use 0-100.' : undefined}
              label="Weight %"
              min={0}
              max={100}
              type="number"
              value={item.weight}
              onChange={numberChange(item.id, 'weight')}
            />
            <div className="flex items-end">
              <Button
                disabled={items.length === 1}
                variant="ghost"
                onClick={() =>
                  setItems((current) => current.filter((entry) => entry.id !== item.id))
                }
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button onClick={() => setItems((current) => [...current, createAssessment(current.length + 1)])}>
          Add assessment
        </Button>
        <Button variant="secondary" onClick={() => setItems([createAssessment(1)])}>
          Reset
        </Button>
      </div>

      <div className="mt-6">
        {result.value ? (
          <ResultBox
            description={`Completed weight: ${result.value.totalWeight}%. Missing weight: ${result.value.missingWeight}%.${
              result.value.hasExtraCredit ? ' Scores above max are treated as extra credit.' : ''
            }${result.value.isOverWeighted ? ' Warning: total weight is over 100%.' : ''}`}
            status={result.value.isOverWeighted ? 'warning' : 'neutral'}
            title="Current weighted grade"
            value={`${result.value.currentGrade.toFixed(2)}%`}
          />
        ) : (
          <ResultBox
            description="Fix the highlighted input values to calculate your grade."
            status="warning"
            title="Input error"
            value={result.error}
          />
        )}
      </div>
    </Card>
  );
}
