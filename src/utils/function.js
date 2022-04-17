const GetYYYYMMDD = (nowTime) => {
	const year = nowTime.getFullYear();
	let month = nowTime.getMonth() + 1;
	let date = nowTime.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (date < 10) {
		date = "0" + date;
	}

	const slashYYYYMMDD = `${year}/${month}/${date}`;
	const hyphenYYYYMMDD = `${year}-${month}-${date}`;

	return { slashYYYYMMDD, hyphenYYYYMMDD };
};

export const GetTodayYYYYMMDD = () => {
	const nowTime = new Date();
	return GetYYYYMMDD(nowTime);
};

export const GetYesterdayYYYYMMDD = () => {
	const YesterdayTime = new Date();
	YesterdayTime.setDate(YesterdayTime.getDate() - 1);
	return GetYYYYMMDD(YesterdayTime);
};
