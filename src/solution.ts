import { solveDay1Part1, solveDay1Part2 } from './solutions/1.js';

export type Solution = (input: string) => number;

export const solutions: [part1: Solution, part2?: Solution][] = [[solveDay1Part1, solveDay1Part2]];
