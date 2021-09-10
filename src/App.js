import React, { useState } from "react";
import "./App.css";
import Row from "./features/components/Row";
import request from "./app/requests";
import Banner from "./features/components/Banner";
import Title from "./features/components/Title";

function App() {
    const [title, setTitle] = useState("Amazon Original");
    const [url, setUrl] = useState(request.fetchAmazonOriginals);

    return (
        <div className="app">
            <Banner fetchUrl={request.fetchNowPlaying} />
            <Title changeTitle={setTitle} changeUrl={setUrl} />
            <Row title={title} fetchUrl={url} />
            <Row title="Top Today" fetchUrl={request.fetchTopToday} />
            <Row title="Now Playing" fetchUrl={request.fetchNowPlaying} />
            <Row title="Popular" fetchUrl={request.fetchPopular} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Up Coming" fetchUrl={request.fetchUpcoming} />
        </div>
    );
}

export default App;
