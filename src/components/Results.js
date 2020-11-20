import React, { useEffect, useState } from "react";
import "../styles/Results.css";
import ResultCard from "./ResultCard";

import { instance } from "../requests/requests";

import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await instance(selectedOption);

			// console.log(result);
			setMovies(result.data.results);

			return result;
		};

		fetchData();
	}, [selectedOption]);
	return (
		<div className="results">
			<FlipMove>
				{movies.map((movie) => (
					<ResultCard key={movie.id} movie={movie} />
				))}
			</FlipMove>
		</div>
	);
}

export default Results;
