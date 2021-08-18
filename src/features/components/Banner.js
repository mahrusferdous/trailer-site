import React, { useState, useEffect, useCallback } from "react";
import axios from "../../app/axios";
import "./Banner.css";
import movieTrailer from "movie-trailer";
import Popup from "./Popup";

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(async () => {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }, []);

    let refresh = useCallback(async () => {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }, []);

    if (movie == undefined) {
        refresh();
    }

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
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <biv className="banner_buttons">
                    <button
                        className="banner_button"
                        onClick={() => {
                            onClickPlayer(movie);
                        }}
                    >
                        Play
                    </button>
                    <button className="banner_button" onClick={refresh}>
                        Refresh
                    </button>
                </biv>
                <h1 className="banner_description">{movie?.overview}</h1>
            </div>
            <div className="banner-fadeBottom" />
            <Popup trailerUrl={trailerUrl} trigger={trailerUrl ? true : false} setTrailerUrl={setTrailerUrl} />
        </header>
    );
}

export default Banner;
