import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Edit, EditIndividual } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/edit" element={<Edit />}></Route>
				<Route path="/edit/:YYYY" element={<EditIndividual />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
