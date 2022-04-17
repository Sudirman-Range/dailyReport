import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { OrdinaryButton } from "../atoms";

const EditScreen = ({ dailyReport, setDailyReport, SubmitDailyReport }) => {
	const ChangeMdeValue = (value) => {
		setDailyReport(value);
	};

	return (
		<>
			<div className="flex flex-row flex-wrap justify-around  w-11/12 gap-x-10  px-4 py-10">
				<div className="max-w-[438px]">
					<SimpleMDE value={dailyReport} onChange={ChangeMdeValue} />
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
	);
};

export default EditScreen;
