import React from "react";
import tunaegg from "../../assets/tunaEgg.png";
import tunaChildhood from "../../assets/tunaChildhood.png";
import tunaAdult from "../../assets/tunaAdult.png";
import tunaGrowthPeriod from "../../assets/tunaGrowthPeriod.png";

const DisplayTuna = ({ continuationCount }) => {
	let sentenceAndPictureIndex;
	if (continuationCount === 0) {
		sentenceAndPictureIndex = 0;
	} else if (continuationCount >= 1 && continuationCount <= 10) {
		sentenceAndPictureIndex = 1;
	} else if (continuationCount >= 11 && continuationCount <= 25) {
		sentenceAndPictureIndex = 2;
	} else if (continuationCount >= 26) {
		sentenceAndPictureIndex = 3;
	}
	const sentenceAndPicture = [
		{ sentence: "↑誰がなんと言おうとマグロの卵です", picture: tunaegg },
		{ sentence: "マグロ　幼年期", picture: tunaChildhood },
		{ sentence: "マグロ　成長期", picture: tunaGrowthPeriod },
		{ sentence: "マグロ　成体", picture: tunaAdult },
	];

	return (
		<div className="flex flex-col justify-center items-center h-[50vh]">
			<img
				className="h-[45vh]"
				src={sentenceAndPicture[sentenceAndPictureIndex].picture}
				alt="tuna"
			/>
			<p className="font-bold">
				{sentenceAndPicture[sentenceAndPictureIndex].sentence}
			</p>
		</div>
	);
};

export default DisplayTuna;
