import React from "react";

const NavButton = ({ title }) => {
	return (
		<div className="p-3 hover:bg-indigo-600 rounded-2xl text-white font-bold text-2xl">
			{title}
		</div>
	);
};

export default NavButton;
