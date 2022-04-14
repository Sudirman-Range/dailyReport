import React from "react";
import { Link } from "react-router-dom";
import { NavButton } from "../atoms";

const LogoutButton = ({ changeIsLogin }) => {
	return (
		<Link to="/" onClick={changeIsLogin}>
			<NavButton title="Logout" />
		</Link>
	);
};

export default LogoutButton;
