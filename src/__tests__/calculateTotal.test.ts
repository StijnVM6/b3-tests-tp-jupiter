import { expect, test } from "vitest";
import { calculateTotal } from "../utils/calculateTotal.ts";

test("lune -2 & soleil no terre", () => {
	const values = { lune: 1, soleil: 1, terre: 1 };
	expect(calculateTotal(values)).toBe(0);
});
test("lune -2 & soleil double terre & terre +2", () => {
	const values = { lune: 1, soleil: 2, terre: 1 };
	expect(calculateTotal(values)).toBe(5);
});
test("lune /2 & soleil no terre", () => {
	const values = { lune: 2, soleil: 1, terre: 2 };
	expect(calculateTotal(values)).toBe(1);
});
test("lune /2 & soleil double terre & terre +2", () => {
	const values = { lune: 2, soleil: 2, terre: 1 };
	expect(calculateTotal(values)).toBe(4);
});
test("terre force total 6", () => {
	const values = { lune: 1, soleil: 2, terre: 2 };
	expect(calculateTotal(values)).toBe(6);
});
