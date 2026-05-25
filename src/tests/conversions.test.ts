import { describe, expect, it } from 'vitest';
import {
  convertCgpaToGpa,
  convertPercentageToGpa
} from '@/lib/calculators/conversions';

describe('convertPercentageToGpa', () => {
  it('converts percentage bands to GPA estimates', () => {
    expect(convertPercentageToGpa(95)).toBe(4);
    expect(convertPercentageToGpa(82)).toBe(3.3);
    expect(convertPercentageToGpa(45)).toBe(0);
  });

  it('handles lower band boundaries', () => {
    expect(convertPercentageToGpa(90)).toBe(4);
    expect(convertPercentageToGpa(50)).toBe(1);
    expect(convertPercentageToGpa(49)).toBe(0);
  });

  it('rejects invalid percentages', () => {
    expect(() => convertPercentageToGpa(101)).toThrow(
      'Percentage must be between 0 and 100.'
    );
  });
});

describe('convertCgpaToGpa', () => {
  it('converts 10-point CGPA to 4.0 GPA estimate', () => {
    expect(convertCgpaToGpa(8.5, 10)).toBe(3.4);
  });

  it('rejects out-of-range CGPA', () => {
    expect(() => convertCgpaToGpa(11, 10)).toThrow('CGPA must be between 0 and 10.');
  });

  it('rejects non-MVP scales', () => {
    expect(() => convertCgpaToGpa(5, 7)).toThrow(
      'Only 10-point CGPA conversion is supported in the MVP.'
    );
  });
});
