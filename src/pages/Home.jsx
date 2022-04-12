import React from "react";

import {
	DailyReportList,
	ContinuationDailyReportCount,
} from "../components/molecules/index";

const Home = () => {
	return (
		<div>
			<ContinuationDailyReportCount />
			<DailyReportList path="dailyReport" />
		</div>
	);
};

export default Home;
