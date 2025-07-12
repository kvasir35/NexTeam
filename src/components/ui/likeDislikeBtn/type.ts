export const LikeButtonStatus = {
	DEFAULT: 0,
	LIKED: 1,
	DISLIKED: 2,
} as const;

export type LikeButtonStatus =
	(typeof LikeButtonStatus)[keyof typeof LikeButtonStatus];
