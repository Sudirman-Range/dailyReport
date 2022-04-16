import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { LoadingAnimation } from "../components/atoms";

const DailyReport = () => {
	const navigate = useNavigate();

	const { date } = useParams();

	const [loading, setLoading] = useState(true);
	const [dailyReport, setDailyReport] = useState();

	useEffect(() => {
		const judgeDateExists = async () => {
			const docRef = doc(db, "dailyReport", date);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setDailyReport(docSnap.data().text);
			} else {
				navigate("/", { replace: true });
			}
			setLoading(false);
		};
		judgeDateExists();
	}, []);

	return (
		<div className="py-14 px-28 w-screen">
			<div className="flex grow p-10 rounded-xl drop-shadow-sm bg-white">
				{loading ? (
					<LoadingAnimation />
				) : (
					<article className="prose">
						<ReactMarkdown>{dailyReport}</ReactMarkdown>
					</article>
				)}
			</div>
		</div>
	);
};

export default DailyReport;
