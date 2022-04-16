import React from "react";

const OrdinaryButton = ({ text }) => {
	return (
		<div className="p-5 bg-indigo-400/80 hover:bg-indigo-600 rounded-2xl drop-shadow-lg text-white font-bold text-2xl">
			{text}
		</div>
	);
};

export default OrdinaryButton;
