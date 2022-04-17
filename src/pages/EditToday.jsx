import React, { useState } from "react";
import { EditScreen } from "../components/molecules";
import { GetTodayYYYYMMDD, GetYesterdayYYYYMMDD } from "../utils/function";
import { setDoc, doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const EditToday = () => {
	const { slashYYYYMMDD: todaySlashDate, hyphenYYYYMMDD: todayHyphenDate } =
		GetTodayYYYYMMDD();
	const { hyphenYYYYMMDD: yesterdayHyphenDate } = GetYesterdayYYYYMMDD();

	const navigate = useNavigate();
	const [todayReport, setTodayReport] = useState(`# ${todayHyphenDate}`);

	const SubmitTodayReport = async () => {
		await setDoc(doc(db, "dailyReport", todayHyphenDate), {
			text: todayReport,
			slashDate: todaySlashDate,
		});

		const YesterdayDocSnap = await getDoc(
			doc(db, "dailyReport", yesterdayHyphenDate)
		);

		const dailyReportContinuationDaysDoc = doc(
			db,
			"dailyReportContinuationDays",
			"continuationDays"
		);
		if (YesterdayDocSnap.exists()) {
			await updateDoc(dailyReportContinuationDaysDoc, {
				count: increment(1),
				slashEndDay: todayHyphenDate,
			});
		} else {
			await updateDoc(dailyReportContinuationDaysDoc, {
				count: 1,
				slashEndDay: todayHyphenDate,
				slashFirstDay: todayHyphenDate,
			});
		}

		navigate("/", { replace: true });
	};
	return (
		<EditScreen
			dailyReport={todayReport}
			setDailyReport={setTodayReport}
			SubmitDailyReport={SubmitTodayReport}
		/>
	);
};

export default EditToday;
