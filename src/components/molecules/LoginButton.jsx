import React from "react";
import { Link } from "react-router-dom";
import { NavButton } from "../atoms";

const LoginButton = ({ changeIsLogin }) => {
	return (
		<Link to="/" onClick={changeIsLogin}>
			<NavButton title="Login" />
		</Link>
	);
};

export default LoginButton;
