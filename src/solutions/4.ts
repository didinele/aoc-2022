import { range, setContains, setsOverlap } from '../helpers.js';
import type { Solution } from '../solution';

function parse(input: string): [Set<number>, Set<number>][] {
	return input.split('\n').map(
		(line) =>
			line.split(',').map((column) => {
				const [x, y] = column.split('-').map(Number) as [number, number];
				return new Set(range({ start: x, end: y + 1 }));
			}) as [Set<number>, Set<number>],
	);
}

export const solveDay4Part1: Solution = (raw) => {
	const input = parse(raw);
	return input.filter(([a, b]) => setContains(a, b) || setContains(b, a)).length;
};

export const solveDay4Part2: Solution = (raw) => {
	const input = parse(raw);
	return input.filter(([a, b]) => setsOverlap(a, b)).length;
};
