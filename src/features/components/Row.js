import React, { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import axios from "../../app/axios";
import "./Row.css";
import Popup from "./Popup";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl }) {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(async () => {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
    }, [fetchUrl]);

    const onClickPlayer = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie.original_title || movie.name || movie.title)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((err) => {
                    console.log(err);
                });
            return false;
        }
    };

    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {movie.map(
                    (movie) =>
                        movie.backdrop_path && (
                            <div
                                className="row_p"
                                onClick={() => {
                                    onClickPlayer(movie);
                                }}
                            >
                                <img key={movie.id} id={movie.id} className="row_poster" src={baseUrl + movie.backdrop_path} alt={movie.title} />
                                <div className="movie_title">
                                    <h3>Title: {movie?.title || movie?.name || movie?.original_name}</h3>
                                    <p>{movie?.overview.substr(0, 150)}...</p>
                                </div>
                            </div>
                        )
                )}
            </div>
            <Popup trailerUrl={trailerUrl} trigger={trailerUrl ? true : false} setTrailerUrl={setTrailerUrl} />
        </div>
    );
}

export default Row;
