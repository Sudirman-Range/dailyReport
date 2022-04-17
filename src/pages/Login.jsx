import React from "react";
import { useState, useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogInOutEventFlag }) => {
	const [appearAlertMessage, setAppearAlertMessage] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();

	const navigate = useNavigate();

	const handleSignIn = () => {
		signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((user) => {
				setLogInOutEventFlag("login");
				navigate("/", { replace: true });
			})
			.catch((e) => {
				setAppearAlertMessage(true);
			});
	};

	return (
		<div className="flex flex-col  items-center w-screen p-6">
			<div className="flex flex-col  items-center bg-white rounded-2xl drop-shadow w-7/12 min-w-[350px]  p-8">
				{appearAlertMessage && (
					<div className="bg-red-400 rounded-xl p-4 font-bold text-lg mb-5 text-white">
						管理者のアカウントしかログイン出来ません
					</div>
				)}
				<div className="flex flex-col justify-around w-full items-center gap-y-20">
					<input
						ref={emailRef}
						className="w-8/12 h-14 border-2 rounded-md text-2xl font-semibold"
						type="text"
						placeholder="Email"
					/>
					<input
						ref={passwordRef}
						className="w-8/12 h-14 border-2 rounded-md text-2xl font-semibold"
						type="Password"
						placeholder="Password"
					/>
					<button
						className="w-5/12 h-12 py-1 px-3 bg-indigo-400/80 rounded-xl text-white text-2xl font-semibold"
						onClick={handleSignIn}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
