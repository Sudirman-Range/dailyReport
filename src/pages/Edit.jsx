import React, { useEffect, useState } from "react";
import { DailyReportList } from "../components/molecules";
import { Link } from "react-router-dom";
import { GetTodayYYYYMMDD } from "../utils/function";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { LoadingAnimation } from "../components/atoms";

const Edit = ({ todayReportExists, setTodayReportExists }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getTodayReportExists = async () => {
			setLoading(true);
			const { hyphenYYYYMMDD } = GetTodayYYYYMMDD();
			console.log(hyphenYYYYMMDD);
			const docRef = doc(db, "dailyReport", hyphenYYYYMMDD);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setTodayReportExists(true);
			} else {
				setTodayReportExists(false);
			}
			setLoading(false);
		};
		getTodayReportExists();
	}, []);
	return (
		<>
			{loading ? (
				<div className="m-10">
					<LoadingAnimation />
				</div>
			) : (
				!todayReportExists && (
					<Link to="/edit/today">
						<div className="m-10 p-5 bg-indigo-400/80 hover:bg-indigo-600 rounded-2xl drop-shadow-lg text-white font-bold text-2xl">
							今日の日報を書く
						</div>
					</Link>
				)
			)}
			<div>
				<DailyReportList path="edit" />
			</div>
		</>
	);
};

export default Edit;
