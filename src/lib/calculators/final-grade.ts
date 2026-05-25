export type FinalGradeInput = {
  currentGrade: number;
  desiredGrade: number;
  finalWeight: number;
};

export type FinalGradeResult = {
  requiredFinalScore: number;
  isPossible: boolean;
  message: string;
};

function roundToTwo(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateRequiredFinalScore(
  input: FinalGradeInput
): FinalGradeResult {
  if (input.finalWeight <= 0 || input.finalWeight > 100) {
    throw new Error('Final weight must be greater than 0 and no more than 100.');
  }

  const finalWeightDecimal = input.finalWeight / 100;
  const requiredFinalScore =
    (input.desiredGrade - input.currentGrade * (1 - finalWeightDecimal)) /
    finalWeightDecimal;
  const roundedScore = roundToTwo(requiredFinalScore);

  if (roundedScore > 100) {
    return {
      requiredFinalScore: roundedScore,
      isPossible: false,
      message: 'This is not usually possible without extra credit or a curve.'
    };
  }

  if (roundedScore <= 0) {
    return {
      requiredFinalScore: roundedScore,
      isPossible: true,
      message: 'You may already have enough to reach your desired grade.'
    };
  }

  return {
    requiredFinalScore: roundedScore,
    isPossible: true,
    message: 'This target is usually possible if you earn this score on the final.'
  };
}
