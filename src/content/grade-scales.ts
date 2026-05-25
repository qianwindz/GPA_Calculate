export type LetterGrade =
  | 'A+'
  | 'A'
  | 'A-'
  | 'B+'
  | 'B'
  | 'B-'
  | 'C+'
  | 'C'
  | 'C-'
  | 'D+'
  | 'D'
  | 'F';

export type GpaScale = {
  id: string;
  name: string;
  maxGpa: number;
  letterToPoints: Record<LetterGrade, number>;
};

export const defaultFourPointScale: GpaScale = {
  id: 'us-4-point',
  name: 'US 4.0 scale',
  maxGpa: 4,
  letterToPoints: {
    'A+': 4,
    A: 4,
    'A-': 3.7,
    'B+': 3.3,
    B: 3,
    'B-': 2.7,
    'C+': 2.3,
    C: 2,
    'C-': 1.7,
    'D+': 1.3,
    D: 1,
    F: 0
  }
};

export const conversionDisclaimer =
  "This calculator provides a general estimate. GPA conversion rules vary by school, country, and admissions office. Always check your institution's official policy.";
