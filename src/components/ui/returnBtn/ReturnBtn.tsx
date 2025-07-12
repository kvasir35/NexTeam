import './ReturnBtn.scss';

interface ButtonProps {
	onClick: () => void;
}

const ReturnBtn = ({ onClick }: ButtonProps) => {
	return (
		<button className="return-btn" onClick={onClick}>
			{'<'} Return
		</button>
	);
};

export default ReturnBtn;
