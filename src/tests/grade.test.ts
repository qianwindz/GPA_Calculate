import { describe, expect, it } from 'vitest';
import { calculateWeightedGrade } from '@/lib/calculators/grade';

describe('calculateWeightedGrade', () => {
  it('calculates weighted contributions and current grade', () => {
    const result = calculateWeightedGrade([
      { id: '1', name: 'Quiz', score: 90, maxScore: 100, weight: 20 },
      { id: '2', name: 'Exam', score: 80, maxScore: 100, weight: 30 }
    ]);

    expect(result.weightedContribution).toBe(42);
    expect(result.totalWeight).toBe(50);
    expect(result.currentGrade).toBe(84);
    expect(result.missingWeight).toBe(50);
  });

  it('flags total weight over 100', () => {
    const result = calculateWeightedGrade([
      { id: '1', name: 'Exam 1', score: 90, maxScore: 100, weight: 60 },
      { id: '2', name: 'Exam 2', score: 80, maxScore: 100, weight: 60 }
    ]);

    expect(result.totalWeight).toBe(120);
    expect(result.missingWeight).toBe(0);
    expect(result.isOverWeighted).toBe(true);
  });

  it('rejects zero max score', () => {
    expect(() =>
      calculateWeightedGrade([
        { id: '1', name: 'Bad', score: 10, maxScore: 0, weight: 10 }
      ])
    ).toThrow('Max score must be greater than 0.');
  });

  it('allows and flags extra credit', () => {
    const result = calculateWeightedGrade([
      { id: '1', name: 'Bonus quiz', score: 12, maxScore: 10, weight: 10 }
    ]);

    expect(result.currentGrade).toBe(120);
    expect(result.hasExtraCredit).toBe(true);
  });

  it('rejects weights outside 0 to 100', () => {
    expect(() =>
      calculateWeightedGrade([
        { id: '1', name: 'Bad', score: 10, maxScore: 10, weight: 101 }
      ])
    ).toThrow('Weight must be between 0 and 100.');
  });
});
