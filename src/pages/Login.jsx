import React from "react";
import { useState } from "react";

const Login = () => {
	const [appearAlertMessage, setAppearAlertMessage] = useState(false);

	const onChnageLoginButton = () => {
		setAppearAlertMessage((prev) => !prev);
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
						className="w-8/12 h-14 border-2 rounded-md text-2xl font-semibold"
						type="text"
						placeholder="Email"
					/>
					<input
						className="w-8/12 h-14 border-2 rounded-md text-2xl font-semibold"
						type="Password"
						placeholder="Password"
					/>
					<button
						className="w-5/12 h-12 py-1 px-3 bg-indigo-400/80 rounded-xl text-white text-2xl font-semibold"
						onClick={onChnageLoginButton}
					>
						{/* authによるlogin処理中にボタンを連続で押せないようにするために処理が終わるまではLogin buttonをdisableにするようにauthの処理に書く */}
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
