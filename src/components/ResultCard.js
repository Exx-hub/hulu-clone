import React, { forwardRef } from "react";
import "../styles/ResultCard.css";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import TextTruncate from "react-text-truncate";

const base_url = "https://image.tmdb.org/t/p/original";

const ResultCard = forwardRef(({ movie }, ref) => {
	return (
		<div ref={ref} className="resultCard">
			<img
				src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
				alt=""
			/>
			<TextTruncate
				line={3}
				element="p"
				truncateText="…"
				text={movie.overview}
			/>

			<h4>{movie?.title || movie?.name || movie?.original_name}</h4>

			<p className="resultCard__bottom">
				{movie.release_date || movie.first_air_date} · <ThumbUpAltIcon />{" "}
				{movie.vote_count}
			</p>
		</div>
	);
});

export default ResultCard;
