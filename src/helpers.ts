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
