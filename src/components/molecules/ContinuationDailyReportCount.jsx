import React, { useEffect, useState } from "react";
import { LoadingAnimation } from "../atoms";

import DisplayTuna from "./DisplayTuna";

import { GetTodayYYYYMMDD, GetYesterdayYYYYMMDD } from "../../utils/function";

import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

const ContinuationDailyReportCount = () => {
	const { hyphenYYYYMMDD: todayHyphenDate } = GetTodayYYYYMMDD();
	const { hyphenYYYYMMDD: yesterdayHyphenDate } = GetYesterdayYYYYMMDD();

	const [loading, setLoading] = useState(true);
	const [continuationDaysDocIsValid, setContinuationDaysDocIsValid] =
		useState(false);

	const [slashFirstDay, setSlashFirstDay] = useState("");
	const [slashEndDay, setSlashEndDay] = useState("");
	const [continuationCount, setContinuationCount] = useState(0);

	useEffect(() => {
		setLoading(true);
		const judgeContinuationDaysDocIsValid = async () => {
			const yesterdayDocSnap = await getDoc(
				doc(db, "dailyReport", yesterdayHyphenDate)
			);
			const todayDocSnap = await getDoc(doc(db, "dailyReport", todayHyphenDate));

			if (yesterdayDocSnap.exists() || todayDocSnap.exists()) {
				setContinuationDaysDocIsValid(true);
				const continuationDaysSnap = await getDoc(
					doc(db, "dailyReportContinuationDays", "continuationDays")
				);
				setSlashFirstDay(continuationDaysSnap.data().slashFirstDay);
				setSlashEndDay(continuationDaysSnap.data().slashEndDay);
				setContinuationCount(continuationDaysSnap.data().count);
				setLoading(false);
			} else {
				setContinuationDaysDocIsValid(false);
				setLoading(false);
			}
		};
		judgeContinuationDaysDocIsValid();
	}, []);
	return (
		<div>
			{loading ? (
				<div className="h-[55vh] flex items-center">
					<LoadingAnimation />
				</div>
			) : (
				<div className="flex flex-row flex-wrap justify-center items-center gap-y-3 gap-x-4">
					<div className="h-[60vh] flex flex-col justify-center items-center min-w-[310px] gap-y-2">
						<div className="text-lg text-4xl  font-bold text-indigo-400/80">
							継続日数
						</div>
						<div className="flex flex-row justify-center items-end">
							<div className="text-7xl md:text-9xl font-black text-indigo-400/80">
								{continuationCount}
							</div>
							<div className="text-5xl md:text-7xl font-black text-indigo-400/80">
								日
							</div>
						</div>
						{continuationDaysDocIsValid && (
							<div>{`${slashFirstDay} ~ ${slashEndDay}`}</div>
						)}
					</div>
					<DisplayTuna continuationCount={continuationCount} />
				</div>
			)}
		</div>
	);
};

export default ContinuationDailyReportCount;
