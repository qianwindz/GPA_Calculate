export function convertPercentageToGpa(percentage: number): number {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Percentage must be between 0 and 100.');
  }

  if (percentage >= 90) return 4;
  if (percentage >= 85) return 3.7;
  if (percentage >= 80) return 3.3;
  if (percentage >= 75) return 3;
  if (percentage >= 70) return 2.7;
  if (percentage >= 65) return 2.3;
  if (percentage >= 60) return 2;
  if (percentage >= 55) return 1.7;
  if (percentage >= 50) return 1;
  return 0;
}

export function convertCgpaToGpa(cgpa: number, cgpaScale: 10 | 7 | 5 = 10): number {
  if (cgpaScale !== 10) {
    throw new Error('Only 10-point CGPA conversion is supported in the MVP.');
  }

  if (cgpa < 0 || cgpa > cgpaScale) {
    throw new Error(`CGPA must be between 0 and ${cgpaScale}.`);
  }

  return Math.round(((cgpa / cgpaScale) * 4 + Number.EPSILON) * 100) / 100;
}
