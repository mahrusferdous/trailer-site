import React from "react";
import YouTube from "react-youtube";
import "./Popup.css";

function Popup({ trailerUrl, trigger, setTrailerUrl }) {
    const opts = {
        height: "500",
        width: "300%",
        playerVars: {
            autoplay: 1,
        },
    };

    function trailerDisplay() {
        return trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />;
    }

    return trigger ? (
        <div className="popup" onClick={() => setTrailerUrl("")}>
            <div className="popup-content">{trailerDisplay()}</div>
        </div>
    ) : (
        ""
    );
}

export default Popup;
