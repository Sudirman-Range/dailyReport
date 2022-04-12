import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const DailyReport = () => {
	return (
		<div className="py-14 px-28 w-screen">
			<div className="flex grow p-10 rounded-xl drop-shadow-sm bg-white">
				<article className="prose">
					<ReactMarkdown># テスト</ReactMarkdown>
				</article>
			</div>
		</div>
	);
};

export default DailyReport;
