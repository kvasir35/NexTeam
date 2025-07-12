import { useState } from 'react';

import Problem1 from '@/components/features/problem1';
import Problem2 from '@/components/features/problem2';
import Problem3 from '@/components/features/problem3';
import ProblemSelect from '@/components/features/problemSelect';
import ReturnBtn from '@/components/ui/returnBtn';

import { ProblemStatus } from './components/features/problemSelect/type';

import './App.scss';

const App = () => {
	const [status, setStatus] = useState<ProblemStatus>(ProblemStatus.DEFAULT);

	return (
		<>
			{status === ProblemStatus.PROBLEM1 ? (
				<>
					<ReturnBtn
						onClick={() => setStatus(ProblemStatus.DEFAULT)}
					/>
					<Problem1 />
				</>
			) : status === ProblemStatus.PROBLEM2 ? (
				<>
					<ReturnBtn
						onClick={() => setStatus(ProblemStatus.DEFAULT)}
					/>
					<Problem2 />
				</>
			) : status === ProblemStatus.PROBLEM3 ? (
				<>
					<ReturnBtn
						onClick={() => setStatus(ProblemStatus.DEFAULT)}
					/>
					<Problem3 />
				</>
			) : (
				<ProblemSelect onClick={setStatus} />
			)}
		</>
	);
};

export default App;
