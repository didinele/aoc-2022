export function reduceFunctions<A1, R1>(functions: [(arg: A1) => R1]): (arg: A1) => R1;

export function reduceFunctions<A1, A2, R1, R2>(functions: [(arg: A1) => R1, (arg: R1) => R2]): (arg: A1) => R2;

export function reduceFunctions<A1, A2, A3, R1, R2, R3>(
	functions: [(arg: A1) => R1, (arg: R1) => R2, (arg: R2) => R3],
): (arg: A1) => R3;

export function reduceFunctions<A1, A2, A3, A4, R1, R2, R3, R4>(
	functions: [(arg: A1) => R1, (arg: R1) => R2, (arg: R2) => R3, (arg: R3) => R4],
): (arg: A1) => R4;

export function reduceFunctions(functions: ((arg: any) => any)[]) {
	return (arg: any) => functions.reduce((result, fn) => fn(result), arg);
}
