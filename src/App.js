import React, { useEffect, useState } from "react";
import "./App.css";
import GenreNav from "./components/GenreNav";
import Header from "./components/Header";
import Results from "./components/Results";

import { requests } from "./requests/requests";

function App() {
	const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

	return (
		<div className="app">
			<Header />
			<GenreNav setSelectedOption={setSelectedOption} />
			<Results selectedOption={selectedOption} />
		</div>
	);
}

export default App;
