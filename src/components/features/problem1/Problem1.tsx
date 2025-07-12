import { useState } from 'react';

import LikeDislikeBtn from '@/components/ui/likeDislikeBtn';

import { LikeButtonStatus } from '@/components/ui/likeDislikeBtn/type';

/* Simulation of API call */
const LIKE_NB = 100;
const DISLIKE_NB = 25;
const LIKE_BTN_STATUS = LikeButtonStatus.DEFAULT;

const Problem1 = () => {
	const [likeCount, setLikeCount] = useState(LIKE_NB);
	const [dislikeCount, setDislikeCount] = useState(DISLIKE_NB);
	const [likeBtnStatus, setLikeBtnStatus] =
		useState<LikeButtonStatus>(LIKE_BTN_STATUS);

	const onLikeStatusChange = (newStatus: LikeButtonStatus) => {
		if (newStatus !== likeBtnStatus) {
			if (newStatus === LikeButtonStatus.LIKED) {
				if (likeBtnStatus === LikeButtonStatus.DISLIKED) {
					setDislikeCount((current) => current - 1);
				}

				setLikeCount((current) => current + 1);
			}

			if (newStatus === LikeButtonStatus.DISLIKED) {
				if (likeBtnStatus === LikeButtonStatus.LIKED) {
					setLikeCount((current) => current - 1);
				}

				setDislikeCount((current) => current + 1);
			}

			setLikeBtnStatus(newStatus);
		} else {
			if (newStatus === LikeButtonStatus.LIKED) {
				setLikeCount((current) => current - 1);
			} else if (newStatus === LikeButtonStatus.DISLIKED) {
				setDislikeCount((current) => current - 1);
			}

			setLikeBtnStatus(LikeButtonStatus.DEFAULT);
		}
	};

	return (
		<div className="problem1-cmp">
			<LikeDislikeBtn
				likeCount={likeCount}
				dislikeCount={dislikeCount}
				status={likeBtnStatus}
				onStatusChange={onLikeStatusChange}
			/>
		</div>
	);
};

export default Problem1;
