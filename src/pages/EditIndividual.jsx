import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "easymde/dist/easymde.min.css";
import { JudgeDateExists } from "../hooks";
import { LoadingAnimation } from "../components/atoms";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { EditScreen } from "../components/molecules";

const EditIndividual = () => {
	const navigate = useNavigate();
	const { date } = useParams();

	const [loading, setLoading] = useState(true);

	const { dailyReport, setDailyReport, slashDate } = JudgeDateExists(
		date,
		setLoading
	);

	const SubmitDailyReport = async () => {
		await setDoc(doc(db, "dailyReport", date), {
			text: dailyReport,
			slashDate: slashDate,
		});
		navigate("/", { replace: true });
	};

	return (
		<div>
			<div className="flex flex-col items-center w-screen">
				{loading ? (
					<div className="m-10">
						<LoadingAnimation />
					</div>
				) : (
					<EditScreen
						dailyReport={dailyReport}
						setDailyReport={setDailyReport}
						SubmitDailyReport={SubmitDailyReport}
					/>
				)}
			</div>
		</div>
	);
};

export default EditIndividual;
