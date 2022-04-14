import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Edit, EditIndividual, DailyReportList, Login } from "./pages";
import { Navbar } from "./components/molecules";
import { useState } from "react";

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const changeIsLogin = () => {
		if (isLogin) {
			setIsLogin(false);
		} else {
			setIsLogin(true);
		}
	};
	console.log(isLogin);
	return (
		<BrowserRouter>
			<div className="flex flex-col bg-indigo-50 min-h-screen w-screen items-center">
				<Navbar
					isLogin={isLogin}
					setIsLogin={setIsLogin}
					changeIsLogin={changeIsLogin}
				/>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					{isLogin && <Route path="/edit" element={<Edit />}></Route>}

					{isLogin && (
						<Route path="/edit/:date" element={<EditIndividual />}></Route>
					)}

					<Route path="/login" element={<Login />}></Route>

					<Route path="/dailyReport/:date" element={<DailyReportList />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
