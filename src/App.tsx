import { useEffect, useState } from "react";
import "./App.css";
import { calculateTotal } from "./utils/calculateTotal.ts";
import { setJupiterTime } from "./utils/setJupiterTime.ts";

function App() {
	const [values, setValues] = useState({ lune: null, soleil: null, terre: null });
	const [total, setTotal] = useState<number | null>(null);
	const [time, setTime] = useState("");
	const [hasCalculated, setHasCalculated] = useState(false);

	useEffect(() => {
		handleTime();
	}, [total]);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleTotal = () => {
		const { lune, soleil, terre } = values;
		if (lune !== null && soleil !== null && terre !== null) {
			const numLune = Number(lune);
			const numSoleil = Number(soleil);
			const numTerre = Number(terre);

			const isValid = [numLune, numSoleil, numTerre].every((n) => n >= 1 && n <= 2);
			if (!isValid) {
				alert("All values must be between 1 and 2.");
				return;
			}

			const result = calculateTotal({ lune: numLune, soleil: numSoleil, terre: numTerre });
			console.log(result);
			setTotal(result);
			setHasCalculated(true);
		}
	};

	const handleTime = () => {
		if (total !== null) {
			const result = setJupiterTime(total);
			console.log(result);
			setTime(result);
		}
	};

	return (
		<>
			<div style={{ padding: "10px" }}>
				<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
					<label>
						Lune:
						<input
							style={{ marginLeft: "6px", paddingLeft: "2px", height: "20px" }}
							type="number"
							name="lune"
							min="1"
							max="2"
							step="1"
							value={values.lune !== null ? values.lune : ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						Soleil:
						<input
							style={{ marginLeft: "6px", paddingLeft: "2px", height: "20px" }}
							type="number"
							name="soleil"
							min="1"
							max="2"
							step="1"
							value={values.soleil !== null ? values.soleil : ""}
							onChange={handleChange}
						/>
					</label>
					<label>
						Terre:
						<input
							style={{ marginLeft: "6px", paddingLeft: "2px", height: "20px" }}
							type="number"
							name="terre"
							min="1"
							max="2"
							step="1"
							value={values.terre !== null ? values.terre : ""}
							onChange={handleChange}
						/>
					</label>
				</div>

				{values.lune !== null && values.soleil !== null && values.terre !== null && (
					<>
						<div style={{ marginTop: "10px" }}>
							<button onClick={handleTotal}>Calculate</button>
						</div>
					</>
				)}
				{hasCalculated && (
					<>
						<div style={{ marginTop: "10px" }}>Result: {total !== null ? total : ""}</div>
						<div style={{ marginTop: "10px" }}>Jupiter time: {time}</div>
					</>
				)}
			</div>
		</>
	);
}

export default App;
