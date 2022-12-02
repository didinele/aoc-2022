import { solveDay1Part1, solveDay1Part2 } from './solutions/1.js';
import { solveDay2Part1, solveDay2Part2 } from './solutions/2.js';

export type Solution = (input: string) => number;

export const solutions: [part1: Solution, part2?: Solution][] = [
	[solveDay1Part1, solveDay1Part2],
	[solveDay2Part1, solveDay2Part2],
];
