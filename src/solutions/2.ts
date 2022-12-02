import { reduceFunctions } from '../reduceFunctions.js';
import type { Solution } from '../solution.js';

// Enum values are used to resemble points earned from making the choice
enum Choice {
	Rock = 1,
	Paper = 2,
	Scissors = 3,
}

enum WantedOutcome {
	Win,
	Loss,
	Draw,
}

// Technically X, Y, and Z have different meaning as of part 2, but I didn't need to refactor the code to account for that here
type EncodedChoice = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z';
type EncodedOutcome = 'X' | 'Y' | 'Z';

type Part1Input = [opponent: Choice, response: Choice][];
type Part2Input = [opponent: Choice, outcome: WantedOutcome][];

function decodeChoice(choice: EncodedChoice): Choice {
	switch (choice) {
		case 'A':
		case 'X': {
			return Choice.Rock;
		}

		case 'B':
		case 'Y': {
			return Choice.Paper;
		}

		case 'C':
		case 'Z': {
			return Choice.Scissors;
		}
	}
}

function decodeWantedOutcome(outcome: EncodedOutcome): WantedOutcome {
	switch (outcome) {
		case 'X': {
			return WantedOutcome.Loss;
		}

		case 'Y': {
			return WantedOutcome.Draw;
		}

		case 'Z': {
			return WantedOutcome.Win;
		}
	}
}

// Returns the points earned from the game. 0 for a loss, 3 for a draw, 6 for a win.
function determineWinner(opponent: Choice, response: Choice): number {
	if (opponent === response) {
		return 3;
	}

	switch (opponent) {
		case Choice.Rock: {
			return response === Choice.Paper ? 6 : 0;
		}

		case Choice.Paper: {
			return response === Choice.Scissors ? 6 : 0;
		}

		case Choice.Scissors: {
			return response === Choice.Rock ? 6 : 0;
		}
	}
}

function determineResponse(opponent: Choice, outcome: WantedOutcome): Choice {
	if (outcome === WantedOutcome.Draw) {
		return opponent;
	}

	switch (opponent) {
		case Choice.Rock: {
			return outcome === WantedOutcome.Win ? Choice.Paper : Choice.Scissors;
		}

		case Choice.Paper: {
			return outcome === WantedOutcome.Win ? Choice.Scissors : Choice.Rock;
		}

		case Choice.Scissors: {
			return outcome === WantedOutcome.Win ? Choice.Rock : Choice.Paper;
		}
	}
}

const parse = (input: string) => input.split('\n').map((line) => line.split(' ') as [EncodedChoice, EncodedChoice]);

export const solveDay2Part1: Solution = (raw) => {
	const input: Part1Input = parse(raw).map(([opponent, response]): [Choice, Choice] => [
		decodeChoice(opponent),
		decodeChoice(response),
	]);
	return input.reduce<number>((sum, [opponent, response]) => sum + determineWinner(opponent, response) + response, 0);
};

export const solveDay2Part2: Solution = (raw) => {
	const input: Part2Input = parse(raw).map(([opponent, outcome]): [Choice, WantedOutcome] => [
		decodeChoice(opponent),
		decodeWantedOutcome(outcome as EncodedOutcome),
	]);
	return input.reduce<number>(
		(sum, [opponent, outcome]) =>
			sum + determineWinner(opponent, determineResponse(opponent, outcome)) + determineResponse(opponent, outcome),
		0,
	);
};
