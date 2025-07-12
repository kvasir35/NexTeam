import { ProblemStatus } from './type';

import './ProblemSelect.scss';

interface ProblemSelectProps {
	onClick: (status: ProblemStatus) => void;
}

const ProblemSelect = ({ onClick }: ProblemSelectProps) => {
	return (
		<div className="problem-select-cmp">
			<h1 className="title">Choose a Problem:</h1>

			<div className="problem-select-list">
				<a onClick={() => onClick(ProblemStatus.PROBLEM1)}>
					Like/Dislike
				</a>
				<a onClick={() => onClick(ProblemStatus.PROBLEM2)}>
					Running Clock
				</a>
				<a onClick={() => onClick(ProblemStatus.PROBLEM3)}>
					Is cycle checker
				</a>
			</div>
		</div>
	);
};

export default ProblemSelect;
