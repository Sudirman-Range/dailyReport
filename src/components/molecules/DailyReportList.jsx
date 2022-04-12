import React from "react";
import { Link } from "react-router-dom";

const DailyReportList = () => {
	const mockDailyReport = [
		{
			id: "2022-04-12",
			slashDate: "2022/04/12",
			text: "テキスト2022/04/12",
		},
		{
			id: "2022-04-11",
			slashDate: "2022/04/11",
			text: "テキスト2022/04/11",
		},
		{
			id: "2022-04-10",
			slashDate: "2022/04/10",
			text: "テキスト2022/04/10",
		},
		{
			id: "2022-04-09",
			slashDate: "2022/04/09",
			text: "テキスト2022/04/09",
		},
		{
			id: "2022-04-08",
			slashDate: "2022/04/08",
			text: "テキスト2022/04/08",
		},
		{
			id: "2022-04-07",
			slashDate: "2022/04/07",
			text: "テキスト2022/04/07",
		},
		{
			id: "2022-04-06",
			slashDate: "2022/04/06",
			text: "テキスト2022/04/06",
		},
		{
			id: "2022-04-05",
			slashDate: "2022/04/05",
			text: "テキスト2022/04/05",
		},
		{
			id: "2022-04-04",
			slashDate: "2022/04/04",
			text: "テキスト2022/04/04",
		},
	];
	return (
		<div className="flex flex-row flex-wrap justify-center items-center py-8 px-1 w-screen gap-y-6 gap-x-4">
			{mockDailyReport.map((dailyReport) => {
				return (
					<Link key={dailyReport.id} to={`edit/${dailyReport.id}`}>
						<div className=" rounded-2xl drop-shadow-xl px-4 py-3 bg-indigo-50 min-w-[310px] hover:bg-slate-300">
							<div className="text-center  text-lg font-medium ">
								{dailyReport.slashDate}
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default DailyReportList;
