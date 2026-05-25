import { describe, expect, it } from 'vitest';
import { calculateRequiredFinalScore } from '@/lib/calculators/final-grade';

describe('calculateRequiredFinalScore', () => {
  it('calculates an impossible final score requirement', () => {
    const result = calculateRequiredFinalScore({
      currentGrade: 85,
      desiredGrade: 90,
      finalWeight: 30
    });

    expect(result.requiredFinalScore).toBe(101.67);
    expect(result.isPossible).toBe(false);
  });

  it('calculates a possible final score requirement', () => {
    const result = calculateRequiredFinalScore({
      currentGrade: 90,
      desiredGrade: 80,
      finalWeight: 30
    });

    expect(result.requiredFinalScore).toBe(56.67);
    expect(result.isPossible).toBe(true);
  });

  it('handles already-enough scenarios', () => {
    const result = calculateRequiredFinalScore({
      currentGrade: 100,
      desiredGrade: 60,
      finalWeight: 20
    });

    expect(result.requiredFinalScore).toBe(-100);
    expect(result.message).toContain('already have enough');
  });

  it('rejects invalid final weight', () => {
    expect(() =>
      calculateRequiredFinalScore({
        currentGrade: 90,
        desiredGrade: 90,
        finalWeight: 0
      })
    ).toThrow('Final weight must be greater than 0 and no more than 100.');
  });
});
