import { linesToColumns } from '../helpers.js';
import type { Solution } from '../solution';

type Procedure = {
	count: number;
	from: number;
	to: number;
};

type Input = {
	positions: Record<number, string[]>;
	procedures: Procedure[];
};

function parseCrates(column: string): string[] {
	return [...column.matchAll(/\[(?<crate>\w)]/g)].map((match) => match.groups!.crate!).reverse();
}

function parsePositions(lines: string[]): Record<number, string[]> {
	const columns = linesToColumns(lines, 4);
	return Object.fromEntries(columns.map((column, index) => [index + 1, parseCrates(column)]));
}

function parseProcedures(lines: string[]): Procedure[] {
	return lines.map((line) => {
		const [count, from, to] = [...line.matchAll(/\d+/g)].map((match) => Number.parseInt(match[0]!, 10)) as [
			number,
			number,
			number,
		];

		return { count, from, to };
	});
}

function parse(input: string): Input {
	const [startingPositions, procedures] = input.split('\n\n') as [string, string];

	return {
		positions: parsePositions(startingPositions.split('\n')),
		procedures: parseProcedures(procedures.split('\n')),
	};
}

export const solveDay5Part1: Solution<string> = (raw) => {
	const input = parse(raw);

	for (const procedure of input.procedures) {
		const toMove = input.positions[procedure.from]!.splice(-procedure.count);
		input.positions[procedure.to]!.push(...toMove.reverse());
	}

	return Object.values(input.positions)
		.map((crates) => crates.at(-1))
		.join('');
};

export const solveDay5Part2: Solution<string> = (raw) => {
	const input = parse(raw);

	for (const procedure of input.procedures) {
		const toMove = input.positions[procedure.from]!.splice(-procedure.count);
		input.positions[procedure.to]!.push(...toMove);
	}

	return Object.values(input.positions)
		.map((crates) => crates.at(-1))
		.join('');
};
