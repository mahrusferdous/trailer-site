import React from "react";
import "./App.css";
import Row from "./features/components/Row";
import request from "./app/requests";
import Banner from "./features/components/Banner";
import Title from "./features/components/Title";

function App() {
    return (
        <div className="app">
            <Banner fetchUrl={request.fetchNowPlaying} />
            <Title />
            <Row title="Now Playing" fetchUrl={request.fetchNowPlaying} />
            <Row title="Popular" fetchUrl={request.fetchPopular} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Up Coming" fetchUrl={request.fetchUpcoming} />
        </div>
    );
}

export default App;
