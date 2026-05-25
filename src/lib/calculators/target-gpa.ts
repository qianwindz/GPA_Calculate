export type TargetGpaInput = {
  currentGpa: number;
  currentCredits: number;
  targetGpa: number;
  futureCredits: number;
};

export type TargetGpaResult = {
  requiredFutureGpa: number;
  isPossibleOnFourPointScale: boolean;
  message: string;
};

function roundToTwo(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateRequiredFutureGpa(
  input: TargetGpaInput
): TargetGpaResult {
  if (input.currentGpa < 0 || input.currentGpa > 4) {
    throw new Error('Current GPA must be between 0 and 4.');
  }

  if (input.targetGpa < 0 || input.targetGpa > 4) {
    throw new Error('Target GPA must be between 0 and 4.');
  }

  if (input.currentCredits < 0) {
    throw new Error('Current credits cannot be negative.');
  }

  if (input.futureCredits <= 0) {
    throw new Error('Future credits must be greater than 0.');
  }

  const requiredFutureGpa =
    (input.targetGpa * (input.currentCredits + input.futureCredits) -
      input.currentGpa * input.currentCredits) /
    input.futureCredits;
  const roundedGpa = roundToTwo(requiredFutureGpa);

  return {
    requiredFutureGpa: roundedGpa,
    isPossibleOnFourPointScale: roundedGpa <= 4,
    message:
      roundedGpa > 4
        ? 'This target is not reachable on a standard 4.0 scale with the planned credits.'
        : 'This is the average GPA you need across future credits.'
  };
}
