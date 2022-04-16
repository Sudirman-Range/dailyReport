import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { JudgeDateExists } from "../hooks";
import { LoadingAnimation } from "../components/atoms";
import { OrdinaryButton } from "../components/atoms";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const EditIndividual = () => {
	const navigate = useNavigate();
	const { date } = useParams();

	const [loading, setLoading] = useState(true);

	const { dailyReport, setDailyReport, slashDate } = JudgeDateExists(
		date,
		setLoading
	);

	const ChangeMdeEditaValue = (value) => {
		setDailyReport(value);
	};

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
					<>
						<div className="flex flex-row flex-wrap justify-around  w-11/12 gap-x-10  px-4 py-10">
							<div className="max-w-[438px]">
								<SimpleMDE value={dailyReport} onChange={ChangeMdeEditaValue} />
							</div>

							<div className="flex grow p-10 rounded-xl drop-shadow-sm bg-white">
								<article className="prose">
									<ReactMarkdown>{dailyReport}</ReactMarkdown>
								</article>
							</div>
						</div>
						<div onClick={SubmitDailyReport}>
							<OrdinaryButton text="Submit" />
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default EditIndividual;
