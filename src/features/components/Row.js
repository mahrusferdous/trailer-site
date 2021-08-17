import React, { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import axios from "../../app/axios";
import "./Row.css";
import YouTube from "react-youtube";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl }) {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(async () => {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

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
        }
    };

    function trailerDisplay() {
        return trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />;
    }

    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {movie.map((movie) => (
                    <img
                        onClick={() => {
                            onClickPlayer(movie);
                        }}
                        key={movie.id}
                        id={movie.id}
                        className="row_poster"
                        src={baseUrl + movie.backdrop_path}
                        alt={movie.title}
                    />
                ))}
            </div>
            {trailerDisplay()}
        </div>
    );
}

export default Row;
