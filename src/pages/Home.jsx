import React from "react";

import {
	DailyReportList,
	ContinuationDailyReportCount,
} from "../components/molecules/index";

const Home = () => {
	return (
		<div>
			<ContinuationDailyReportCount />
			<DailyReportList />
		</div>
	);
};

export default Home;
