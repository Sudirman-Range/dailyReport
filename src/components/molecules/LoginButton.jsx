import React from "react";
import { Link } from "react-router-dom";
import { NavButton } from "../atoms";

const LoginButton = () => {
	return (
		<Link to="/login">
			<NavButton title="Login" />
		</Link>
	);
};

export default LoginButton;
