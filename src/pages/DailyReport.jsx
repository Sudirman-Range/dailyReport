import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { LoadingAnimation } from "../components/atoms";
import { JudgeDateExists } from "../hooks";

const DailyReport = () => {
	const { date } = useParams();
	const [loading, setLoading] = useState(true);
	const { dailyReport } = JudgeDateExists(date, setLoading);

	return (
		<div className="py-14 md:px-28 px-5 w-screen">
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
