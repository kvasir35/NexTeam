import { useRef, useState } from 'react';

import Button from '@/components/ui/button';

import './Problem3.scss';

const Problem3 = () => {
	const arrayAInpt = useRef<HTMLInputElement>(null);
	const arrayBInpt = useRef<HTMLInputElement>(null);
	const [result, setResult] = useState<string | null>(null);

	const solution = (arrayA: number[], arrayB: number[]): boolean => {
		const N = arrayA.length;

		// If the 2 arrays are different length this is incorrect
		if (arrayB.length !== N) return false;

		// Create a Map representing the graph
		const graph = new Map<number, number>();

		// Check every value from both array to create our graph
		for (let i = 0; i < N; i++) {
			const from = arrayA[i];
			const to = arrayB[i];

			// If value not between 1 and N it is incorrect
			if (from < 1 || from > N || to < 1 || to > N) {
				return false;
			}

			graph.set(from, to);
		}

		// When a value is visited set it value to true
		const visited: boolean[] = new Array(N).fill(false);
		let current = arrayA[0];

		// Follow the graph to check if we come back where we start
		for (let i = 0; i < N; i++) {
			//We set idx to current-1 because graph is from 1 to N (Does not start at 0 but visited array start at idx 0)
			const idx = current - 1;
			// If we alreaddy visited this value it is incorrect
			if (visited[idx]) return false;
			visited[idx] = true;
			const next = graph.get(current);
			if (next === undefined) return false;
			// We go to the next value of the graph
			current = next;
		}

		// Check that we're back to the starting point
		return current === arrayA[0];
	};

	const runCycle = () => {
		const rawA = arrayAInpt.current?.value;
		const rawB = arrayBInpt.current?.value;

		if (!rawA || !rawB) {
			setResult('Please enter both arrays.');
			return;
		}

		try {
			const A = rawA.split(',').map((n) => parseInt(n.trim()));
			const B = rawB.split(',').map((n) => parseInt(n.trim()));

			if (A.some(isNaN) || B.some(isNaN)) {
				setResult('Invalid input: arrays must contain numbers only.');
				return;
			}

			const res = solution(A, B);
			setResult(`Result: ${res}`);
		} catch (err) {
			console.log(err);
			setResult('Error processing input.');
		}
	};

	return (
		<div className="problem3-cmp">
			<div className="input-container">
				<input
					ref={arrayAInpt}
					type="text"
					placeholder="Array A (e.g. 1,3,2,4)"
				/>

				<input
					ref={arrayBInpt}
					type="text"
					placeholder="Array B (e.g. 4,1,3,2)"
					className="border p-2 w-full"
				/>
			</div>

			<Button onClick={runCycle} className="run-btn">
				Run
			</Button>

			{result && <div className="result-container">{result}</div>}
		</div>
	);
};

export default Problem3;
