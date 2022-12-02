import { reduceFunctions } from '../reduceFunctions.js';
import type { Solution } from '../solution.js';

const parse = reduceFunctions([
	(input: string): string[][] => input.split('\n\n').map((line) => line.split('\n')),
	(input: string[][]): number[] =>
		input.map((items) => items.reduce<number>((sum, item) => sum + Number.parseInt(item, 10), 0)),
]);

export const solveDay1Part1: Solution = (raw) => {
	const input = parse(raw);
	return input.sort((a, b) => b - a).at(0)!;
};

export const solveDay1Part2: Solution = (raw) => {
	const input = parse(raw);
	const sorted = input.sort((a, b) => b - a);
	return sorted.slice(0, 3).reduce<number>((sum, item) => sum + item, 0);
};
