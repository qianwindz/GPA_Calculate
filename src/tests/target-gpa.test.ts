import { describe, expect, it } from 'vitest';
import { calculateRequiredFutureGpa } from '@/lib/calculators/target-gpa';

describe('calculateRequiredFutureGpa', () => {
  it('calculates required future GPA and flags impossible targets', () => {
    const result = calculateRequiredFutureGpa({
      currentGpa: 3.2,
      currentCredits: 60,
      targetGpa: 3.5,
      futureCredits: 30
    });

    expect(result.requiredFutureGpa).toBe(4.1);
    expect(result.isPossibleOnFourPointScale).toBe(false);
  });

  it('calculates possible targets', () => {
    const result = calculateRequiredFutureGpa({
      currentGpa: 3,
      currentCredits: 30,
      targetGpa: 3.2,
      futureCredits: 30
    });

    expect(result.requiredFutureGpa).toBe(3.4);
    expect(result.isPossibleOnFourPointScale).toBe(true);
  });

  it('rejects invalid GPA inputs', () => {
    expect(() =>
      calculateRequiredFutureGpa({
        currentGpa: 4.2,
        currentCredits: 30,
        targetGpa: 3.5,
        futureCredits: 15
      })
    ).toThrow('Current GPA must be between 0 and 4.');
  });

  it('rejects zero future credits', () => {
    expect(() =>
      calculateRequiredFutureGpa({
        currentGpa: 3,
        currentCredits: 30,
        targetGpa: 3.5,
        futureCredits: 0
      })
    ).toThrow('Future credits must be greater than 0.');
  });
});
