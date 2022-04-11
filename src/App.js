import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Edit, EditIndividual } from "./pages";
import { Navbar } from "./components/molecules";

function App() {
	return (
		<BrowserRouter>
			<div className="flex flex-col bg-indigo-50 h-screen w-screen items-center">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/edit" element={<Edit />}></Route>
					<Route path="/edit/:date" element={<EditIndividual />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
