import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { LoadingAnimation } from "../atoms";

const DailyReportList = ({ path }) => {
	const [dailyReports, setDailyReports] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getDailyReports = async () => {
			const q = query(collection(db, "dailyReport"), orderBy("slashDate", "desc"));
			const docSnap = await getDocs(q);
			setDailyReports(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getDailyReports();
		setLoading(false);
	}, []);

	return (
		<div className="flex flex-row flex-wrap justify-center items-center py-8 px-1 w-screen gap-y-6 gap-x-4">
			{loading ? (
				<LoadingAnimation />
			) : (
				dailyReports?.map((dailyReport) => {
					return (
						<Link key={dailyReport.id} to={`/${path}/${dailyReport.id}`}>
							<div className=" rounded-2xl drop-shadow-xl px-4 py-3 bg-indigo-50 min-w-[310px] hover:bg-slate-300">
								<div className="text-center  text-lg font-medium ">
									{dailyReport.slashDate}
								</div>
							</div>
						</Link>
					);
				})
			)}
		</div>
	);
};

export default DailyReportList;
