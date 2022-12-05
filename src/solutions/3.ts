import { iterateInChunks } from '../helpers.js';
import type { Solution } from '../solution.js';

function calculatePriority(item: string): number {
	const charCode = item.toLowerCase().codePointAt(0)! - 'a'.codePointAt(0)! + 1;
	return item === item.toUpperCase() ? charCode + 26 : charCode;
}

export const solveDay3Part1: Solution<number> = (raw) => {
	const compartments = raw
		.split('\n')
		.map((line): [string, string] => [line.slice(0, line.length / 2), line.slice(line.length / 2)]);

	const commonItems = compartments.map<string>(([a, b]) => a.split('').find((char) => b.includes(char))!);

	const priorities = commonItems.map(calculatePriority);
	return priorities.reduce((sum, priority) => sum + priority, 0);
};

export const solveDay3Part2: Solution<number> = (raw) => {
	const grouped = [...(iterateInChunks(raw.split('\n'), 3) as Generator<[string, string, string]>)];
	// eslint-disable-next-line id-length
	return grouped.reduce<number>((sum, [a, b, c]) => {
		const commonItem = a.split('').find((char) => b.includes(char) && c.includes(char))!;
		return sum + calculatePriority(commonItem);
	}, 0);
};
