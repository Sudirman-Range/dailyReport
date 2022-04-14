import React from "react";
import { NavButton } from "../atoms";
import { Link } from "react-router-dom";
import { LogutButton, LoginButton } from ".";
import { useState } from "react";

const Navbar = ({ isLogin, setIsLogin, changeIsLogin }) => {
	return (
		<div className="flex flex-row mt-8 py-4 px-5 md:px-20  justify-between items-center w-10/12 h-24 bg-indigo-400/80 rounded-3xl drop-shadow-lg">
			<Link to="/">
				<NavButton title="Home" />
			</Link>
			{isLogin ? (
				<div className="flex ">
					<Link to="/edit">
						<NavButton title="Edit" />
					</Link>
					<LogutButton changeIsLogin={changeIsLogin} />
				</div>
			) : (
				<LoginButton changeIsLogin={changeIsLogin} />
			)}
		</div>
	);
};

export default Navbar;
