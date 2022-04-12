import React from "react";
import { Link } from "react-router-dom";
import { NavButton } from "../atoms";

const Logout = ({ changeIsLogin }) => {
	return (
		<Link to="/" onClick={changeIsLogin}>
			<NavButton title="Logout" />
		</Link>
	);
};

export default Logout;
