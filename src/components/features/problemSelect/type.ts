export const ProblemStatus = {
	DEFAULT: 0,
	PROBLEM1: 1,
	PROBLEM2: 2,
	PROBLEM3: 3,
} as const;

export type ProblemStatus = (typeof ProblemStatus)[keyof typeof ProblemStatus];
