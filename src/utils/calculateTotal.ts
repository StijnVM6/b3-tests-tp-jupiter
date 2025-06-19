import type { Values } from "../types";

export const calculateTotal = (values: Values): number => {
	const { lune, soleil, terre } = values;

	let total: number = lune + soleil + terre;

	if (lune === 1) total -= 2;
	if (soleil === 1) {
		total -= terre;
		if (lune === 2) total = Math.floor(total / 2);
	}
	if (soleil === 2) {
		total += terre;
		if (terre === 1) total += 2;
		if (lune === 2) total = Math.floor(total / 2);
		if (terre === 2) total = 6;
	}

	return total;
};
