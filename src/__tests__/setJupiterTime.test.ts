import { expect, test } from "vitest";
import { setJupiterTime } from "../utils/setJupiterTime.ts";

const time: string[] = ["mortin", "aprenoon", "soirning", "nuight"];

test("", () => {
	expect(setJupiterTime(0)).toBe(time[0]);
});
test("", () => {
	expect(setJupiterTime(1)).toBe(time[0]);
});
test("", () => {
	expect(setJupiterTime(2)).toBe(time[0]);
});
test("", () => {
	expect(setJupiterTime(3)).toBe(time[1]);
});
test("", () => {
	expect(setJupiterTime(4)).toBe(time[1]);
});
test("", () => {
	expect(setJupiterTime(5)).toBe(time[2]);
});
test("", () => {
	expect(setJupiterTime(6)).toBe(time[3]);
});
