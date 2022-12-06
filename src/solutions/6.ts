import type { Solution } from '../solution';

export const solveDay6Part1: Solution<number> = (input) => {
	for (let idx = 4; idx < input.length; idx++) {
		const set = new Set(input.slice(idx - 4, idx));
		if (set.size === 4) {
			return idx;
		}
	}

	throw new Error('No solution found');
};

export const solveDay6Part2: Solution<number> = (input) => {
	for (let idx = 14; idx < input.length; idx++) {
		const set = new Set(input.slice(idx - 14, idx));
		if (set.size === 14) {
			return idx;
		}
	}

	throw new Error('No solution found');
};
