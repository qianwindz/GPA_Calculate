import { describe, expect, it } from 'vitest';
import { defaultFourPointScale } from '@/content/grade-scales';
import { calculateGpa } from '@/lib/calculators/gpa';

describe('calculateGpa', () => {
  it('calculates weighted GPA from credits and letter grades', () => {
    const result = calculateGpa(
      [
        { id: '1', name: 'Course 1', credits: 3, grade: 'A' },
        { id: '2', name: 'Course 2', credits: 4, grade: 'B' }
      ],
      defaultFourPointScale
    );

    expect(result).toEqual({
      totalCredits: 7,
      totalGradePoints: 24,
      gpa: 3.43
    });
  });

  it('returns zero totals for empty courses', () => {
    expect(calculateGpa([], defaultFourPointScale)).toEqual({
      totalCredits: 0,
      totalGradePoints: 0,
      gpa: 0
    });
  });

  it('ignores zero-credit courses', () => {
    const result = calculateGpa(
      [{ id: '1', name: 'Audit', credits: 0, grade: 'A' }],
      defaultFourPointScale
    );

    expect(result.gpa).toBe(0);
    expect(result.totalCredits).toBe(0);
  });

  it('rejects negative credits', () => {
    expect(() =>
      calculateGpa(
        [{ id: '1', name: 'Bad', credits: -1, grade: 'A' }],
        defaultFourPointScale
      )
    ).toThrow('Credits cannot be negative.');
  });

  it('rounds GPA to two decimals', () => {
    const result = calculateGpa(
      [
        { id: '1', name: 'Course 1', credits: 3, grade: 'A-' },
        { id: '2', name: 'Course 2', credits: 2, grade: 'B+' }
      ],
      defaultFourPointScale
    );

    expect(result.gpa).toBe(3.54);
  });
});
