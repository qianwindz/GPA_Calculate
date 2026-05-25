export type AssessmentInput = {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  weight: number;
};

export type GradeResult = {
  currentGrade: number;
  totalWeight: number;
  missingWeight: number;
  weightedContribution: number;
  hasExtraCredit: boolean;
  isOverWeighted: boolean;
};

function roundToTwo(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateWeightedGrade(items: AssessmentInput[]): GradeResult {
  const totals = items.reduce(
    (acc, item) => {
      if (item.score < 0) {
        throw new Error('Score cannot be negative.');
      }

      if (item.maxScore <= 0) {
        throw new Error('Max score must be greater than 0.');
      }

      if (item.weight < 0 || item.weight > 100) {
        throw new Error('Weight must be between 0 and 100.');
      }

      const contribution = (item.score / item.maxScore) * item.weight;

      return {
        weightedContribution: acc.weightedContribution + contribution,
        totalWeight: acc.totalWeight + item.weight,
        hasExtraCredit: acc.hasExtraCredit || item.score > item.maxScore
      };
    },
    { weightedContribution: 0, totalWeight: 0, hasExtraCredit: false }
  );

  const currentGrade =
    totals.totalWeight === 0
      ? 0
      : (totals.weightedContribution / totals.totalWeight) * 100;

  return {
    currentGrade: roundToTwo(currentGrade),
    totalWeight: roundToTwo(totals.totalWeight),
    missingWeight: roundToTwo(Math.max(0, 100 - totals.totalWeight)),
    weightedContribution: roundToTwo(totals.weightedContribution),
    hasExtraCredit: totals.hasExtraCredit,
    isOverWeighted: totals.totalWeight > 100
  };
}
