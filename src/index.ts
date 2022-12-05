import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';
import { Stopwatch } from '@sapphire/stopwatch';
import { solutions } from './solution.js';

const args = process.argv.slice(2);
if (args.length !== 2) {
	console.error('Usage: yarn solve <day> <part>');
	process.exit(1);
}

const [day, part] = args.map((arg) => Number.parseInt(arg, 10)) as [number, number];
const stopwatch = new Stopwatch(2);

const solve = solutions[day - 1]?.[part - 1];

if (!solve) {
	console.error(`No solution implemented for day ${day} part ${part}`);
	process.exit(1);
}

const testInput = readFileSync(join(process.cwd(), 'tests', `${day}_input.txt`), 'utf8');
const testExpectedOutput = readFileSync(join(process.cwd(), 'tests', `${day}_output_${part}.txt`), 'utf8');
const testOutput = solve(testInput);

if (testExpectedOutput !== String(testOutput)) {
	console.error(`Test failed, got ${testOutput}, expected ${testExpectedOutput}`);
	process.exit(1);
}

const input = readFileSync(join(process.cwd(), 'input', `${day}.txt`), 'utf8');

stopwatch.start();
const result = solve(input);
stopwatch.stop();

console.log(`Result: ${result}; Done in ${stopwatch.toString()}`);
