import { solveDay1Part1, solveDay1Part2 } from './solutions/1.js';
import { solveDay2Part1, solveDay2Part2 } from './solutions/2.js';
import { solveDay3Part1, solveDay3Part2 } from './solutions/3.js';
import { solveDay4Part1, solveDay4Part2 } from './solutions/4.js';

export type Solution = (input: string) => number;

export const solutions: [part1: Solution, part2?: Solution][] = [
	[solveDay1Part1, solveDay1Part2],
	[solveDay2Part1, solveDay2Part2],
	[solveDay3Part1, solveDay3Part2],
	[solveDay4Part1, solveDay4Part2],
];
