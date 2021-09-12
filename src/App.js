import React, { useState } from "react";
import "./App.css";
import Row from "./features/components/Row";
import request from "./app/requests";
import Banner from "./features/components/Banner";
import Title from "./features/components/Title";
import Box from "./features/components/MessageBox";

function App() {
    const [title, setTitle] = useState("Trending All Week");
    const [url, setUrl] = useState(request.fetchTrending);

    return (
        <div className="app">
            <Banner fetchUrl={request.fetchTrending} />
            <Title changeTitle={setTitle} changeUrl={setUrl} />
            <Row title={title} fetchUrl={url} />
            <Row title="Top Today" fetchUrl={request.fetchTopToday} />
            <Row title="Now Playing" fetchUrl={request.fetchNowPlaying} />
            <Row title="Popular" fetchUrl={request.fetchPopular} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Up Coming" fetchUrl={request.fetchUpcoming} />
            <Box />
        </div>
    );
}

export default App;
