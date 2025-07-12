import { LikeButtonStatus } from './type';

import './LikeDislikeBtn.scss';
import Button from '@/components/ui/button';

interface LikeButtonProps {
	likeCount?: number;
	dislikeCount?: number;
	status?: LikeButtonStatus;
	onStatusChange?: (newStatus: LikeButtonStatus) => void;
}

const LikeDislikeBtn = ({
	likeCount = 0,
	dislikeCount = 0,
	status = LikeButtonStatus.DEFAULT,
	onStatusChange,
}: LikeButtonProps) => {
	const handleClick = (newStatus: LikeButtonStatus) => {
		if (onStatusChange) {
			onStatusChange(newStatus);
		}
	};

	return (
		<div className="like-dislike-btn-cmp">
			<Button
				className={`like-button ${
					status === LikeButtonStatus.LIKED ? 'liked' : ''
				}`}
				onClick={() => handleClick(LikeButtonStatus.LIKED)}
			>
				<span className="label">Like</span>
				<span className="separator">|</span>
				<span className="likes-counter">{likeCount}</span>
			</Button>

			<Button
				className={`dislike-button ${
					status === LikeButtonStatus.DISLIKED ? 'disliked' : ''
				}`}
				onClick={() => handleClick(LikeButtonStatus.DISLIKED)}
			>
				<span className="label">Like</span>
				<span className="separator">|</span>
				<span className="dislikes-counter">{dislikeCount}</span>
			</Button>
		</div>
	);
};

export default LikeDislikeBtn;
