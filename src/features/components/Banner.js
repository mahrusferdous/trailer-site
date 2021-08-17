import React, { useState, useEffect } from "react";
import axios from "../../app/axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([]);

    useEffect(async () => {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }, []);

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
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </biv>
                <h1 className="banner_description">{movie?.overview}</h1>
            </div>
            <div className="banner-fadeBottom" />
        </header>
    );
}

export default Banner;
