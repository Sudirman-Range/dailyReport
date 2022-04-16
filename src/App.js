import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Home,
	Edit,
	EditIndividual,
	DailyReportList,
	Login,
	EditToday,
} from "./pages";
import { Navbar } from "./components/molecules";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
	const [logInOutEventFlag, setLogInOutEventFlag] = useState(undefined);
	const [loading, setLoading] = useState(true);
	const [isAuth, setIsAuth] = useState(false);

	const [todayReportExists, setTodayReportExists] = useState(true);

	useEffect(() => {
		setLoading(true);
		console.log("app.jsのuseEffectが走ってるよ〜");
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log("onauthStateChangedが走ってるよ..");
			if (user) {
				setIsAuth(true);
			} else {
				setIsAuth(false);
			}
			setLoading(false);
			unsubscribe();
		});
	}, [logInOutEventFlag]);

	return (
		<BrowserRouter>
			<div className="flex flex-col bg-indigo-50 min-h-screen w-screen items-center">
				<Navbar
					loading={loading}
					isAuth={isAuth}
					setLogInOutEventFlag={setLogInOutEventFlag}
				/>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					{!loading && isAuth && (
						<Route
							path="/edit"
							element={
								<Edit
									todayReportExists={todayReportExists}
									setTodayReportExists={setTodayReportExists}
								/>
							}
						></Route>
					)}

					{!loading && isAuth && (
						<Route path="/edit/:date" element={<EditIndividual />}></Route>
					)}

					{!loading && isAuth && (
						<Route
							path="/edit/today"
							element={<EditToday setTodayReportExists={setTodayReportExists} />}
						></Route>
					)}

					{!loading && !isAuth && (
						<Route
							path="/login"
							element={<Login setLogInOutEventFlag={setLogInOutEventFlag} />}
						></Route>
					)}

					<Route path="/dailyReport/:date" element={<DailyReportList />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
