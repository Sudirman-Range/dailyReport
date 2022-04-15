import React from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../atoms";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const LogoutButton = ({ setLogInOutEventFlag }) => {
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth).then(() => {
			setLogInOutEventFlag("logout");
			navigate("/", { replace: true });
		});
	};

	return (
		<div onClick={handleSignOut}>
			<NavButton title="Logout" />
		</div>
	);
};

export default LogoutButton;
