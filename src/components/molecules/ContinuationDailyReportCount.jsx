import React from "react";

const ContinuationDailyReportCount = () => {
	return (
		<div className="flex flex-row flex-wrap justify-around items-center gap-y-3">
			<div className="h-[60vh] flex flex-col justify-center items-center min-w-[310px] gap-y-2">
				<div className="text-lg text-4xl  font-bold text-indigo-400/80">
					継続日数
				</div>
				<div className="flex flex-row justify-center items-end">
					<div className="text-7xl md:text-9xl font-black text-indigo-400/80">
						18
					</div>
					<div className="text-5xl md:text-7xl font-black text-indigo-400/80">
						日
					</div>
				</div>
				<div>2022/08/09 ~ 2022/08/09</div>
			</div>
			<div>手書きでマグロの絵を書く</div>
		</div>
	);
};

export default ContinuationDailyReportCount;
