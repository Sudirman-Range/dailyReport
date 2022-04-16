import React from "react";

const LoadingAnimation = () => {
	return (
		<div className="flex justify-center w-full gap-4">
			<div className="animate-ping h-5 w-5 bg-blue-600 rounded-full"></div>
			<div className="animate-ping h-5 w-5 bg-blue-600 rounded-full mx-4"></div>
			<div className="animate-ping h-5 w-5 bg-blue-600 rounded-full"></div>
		</div>
	);
};

export default LoadingAnimation;
