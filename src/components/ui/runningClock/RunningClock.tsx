import { useRef, useState, useEffect } from 'react';
import Button from '@/components/ui/button';
import './RunningClock.scss';

const RunningClock = () => {
	const [timeLeft, setTimeLeft] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [isStarted, setIsStarted] = useState(false);
	const inputMinutesRef = useRef<HTMLInputElement>(null);
	const inputSecondsRef = useRef<HTMLInputElement>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Timer effect
	useEffect(() => {
		if (isRunning && timeLeft > 0) {
			intervalRef.current = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						setIsRunning(false);
						setIsStarted(false);
						return 0;
					}
					return prev - 1;
				});
			}, 1000);
		} else {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isRunning, timeLeft]);

	const onClickStart = () => {
		const minutes = parseInt(inputMinutesRef.current?.value || '0');
		const seconds = parseInt(inputSecondsRef.current?.value || '0');
		const totalSeconds = minutes * 60 + seconds;

		if (totalSeconds > 0) {
			setTimeLeft(totalSeconds);
			setIsRunning(true);
			setIsStarted(true);
		}
	};

	const onClickPause = () => {
		setIsRunning((prev) => !prev);
	};

	const onClickReset = () => {
		setIsRunning(false);
		setIsStarted(false);
		setTimeLeft(0);
		if (inputMinutesRef.current) {
			inputMinutesRef.current.value = '0';
		}

		if (inputSecondsRef.current) {
			inputSecondsRef.current.value = '0';
		}
	};

	const printTimeLeft = () => {
		const minutes = Math.floor(timeLeft / 60);
		const seconds = timeLeft % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`;
	};

	return (
		<div className="running-clock-cmp">
			<div className="setters">
				<div className="minutes-inpt-container">
					<label htmlFor="minute-inpt">
						<input
							type="number"
							id="minute-inpt"
							ref={inputMinutesRef}
							placeholder="0"
						/>
						<span className="label">minutes</span>
					</label>
				</div>

				<div className="seconds-inpt-container">
					<label htmlFor="second-inpt">
						<input
							id="second-inpt"
							type="number"
							ref={inputSecondsRef}
							placeholder="0"
						/>
						<span className="label">Seconds</span>
					</label>
				</div>
			</div>

			<div className="controls">
				<Button className="" onClick={onClickStart}>
					START
				</Button>

				<Button onClick={onClickPause} isDisabled={!isStarted}>
					{isRunning ? 'PAUSE' : 'RESUME'}
				</Button>

				<Button onClick={onClickReset}>RESET</Button>
			</div>

			<h1 data-testid="running-clock" className="running-clock">
				{printTimeLeft()}
			</h1>
		</div>
	);
};

export default RunningClock;
