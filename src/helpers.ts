export function* iterateInChunks<T>(iterable: Iterable<T>, chunkSize: number): Generator<T[]> {
	let chunk: T[] = [];

	for (const item of iterable) {
		chunk.push(item);

		if (chunk.length === chunkSize) {
			yield chunk;
			chunk = [];
		}
	}

	if (chunk.length) {
		yield chunk;
	}
}

type RangeOptions = {
	end: number;
	start: number;
	step?: number;
};

export function* range(range: RangeOptions | number) {
	let rangeEnd: number;
	let start = 0;
	let step = 1;

	if (typeof range === 'number') {
		rangeEnd = range;
	} else {
		start = range.start;
		rangeEnd = range.end;
		step = range.step ?? 1;
	}

	for (let index = start; index < rangeEnd; index += step) {
		yield index;
	}
}

export function setsEqual<T>(a: Set<T>, b: Set<T>): boolean {
	if (a.size !== b.size) {
		return false;
	}

	for (const item of a) {
		if (!b.has(item)) {
			return false;
		}
	}

	return true;
}

export function setContains<T>(a: Set<T>, b: Set<T>): boolean {
	for (const item of b) {
		if (!a.has(item)) {
			return false;
		}
	}

	return true;
}

export function setsOverlap<T>(a: Set<T>, b: Set<T>): boolean {
	for (const item of b) {
		if (a.has(item)) {
			return true;
		}
	}

	return false;
}
