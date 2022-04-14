import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";

const EditIndividual = () => {
	const { date } = useParams();
	const [value, setValue] = useState(`# ${date}`);

	const ChangeMdeEditaValue = (value) => {
		setValue(value);
	};

	return (
		<div>
			<div className="flex flex-col items-center w-screen">
				<div className="flex flex-row flex-wrap justify-around  w-11/12 gap-x-10  px-4 py-10">
					<div className="max-w-[438px]">
						<SimpleMDE value={value} onChange={ChangeMdeEditaValue} />
					</div>

					<div className="flex grow p-10 rounded-xl drop-shadow-sm bg-white">
						<article className="prose">
							<ReactMarkdown>{value}</ReactMarkdown>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditIndividual;
