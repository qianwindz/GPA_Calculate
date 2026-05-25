import type { GpaScale, LetterGrade } from '@/content/grade-scales';

export type CourseInput = {
  id: string;
  name: string;
  credits: number;
  grade: LetterGrade | number;
};

export type GpaResult = {
  totalCredits: number;
  totalGradePoints: number;
  gpa: number;
};

function roundToTwo(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateGpa(courses: CourseInput[], scale: GpaScale): GpaResult {
  const totals = courses.reduce(
    (acc, course) => {
      if (course.credits < 0) {
        throw new Error('Credits cannot be negative.');
      }

      if (course.credits === 0) {
        return acc;
      }

      const gradePoints =
        typeof course.grade === 'number'
          ? course.grade
          : scale.letterToPoints[course.grade];

      if (!Number.isFinite(gradePoints) || gradePoints < 0) {
        throw new Error('Grade points must be a non-negative number.');
      }

      return {
        totalCredits: acc.totalCredits + course.credits,
        totalGradePoints: acc.totalGradePoints + gradePoints * course.credits
      };
    },
    { totalCredits: 0, totalGradePoints: 0 }
  );

  if (totals.totalCredits === 0) {
    return { ...totals, gpa: 0 };
  }

  return {
    ...totals,
    totalGradePoints: roundToTwo(totals.totalGradePoints),
    gpa: roundToTwo(totals.totalGradePoints / totals.totalCredits)
  };
}
