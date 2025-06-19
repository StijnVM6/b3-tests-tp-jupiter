export const setJupiterTime = (total: number): string => {
	if (total <= 2) return "mortin";
	else if (total >= 3 && total <= 4) return "aprenoon";
	else if (total === 5) return "soirning";
	else return "nuight";
};
