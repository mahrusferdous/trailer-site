import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "./Title.css";

function Title() {
    return (
        <div className="hover-player">
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/amazon.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px", overflow: "hidden" }}
                pausedOverlay={
                    <img
                        src="images/amazon.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/apple.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px" }}
                pausedOverlay={
                    <img
                        src="images/apple.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/disney.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px" }}
                pausedOverlay={
                    <img
                        src="images/disney.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/netflix.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px" }}
                pausedOverlay={
                    <img
                        src="images/netflix.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/hbo.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px" }}
                pausedOverlay={
                    <img
                        src="images/hbo.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/youtube.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px" }}
                pausedOverlay={
                    <img
                        src="images/youtube.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/hulu.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px" }}
                pausedOverlay={
                    <img
                        src="images/hulu.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/peacock.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px" }}
                pausedOverlay={
                    <img
                        src="images/peacock.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
            <HoverVideoPlayer
                className="player-wrapper"
                videoSrc="videos/paramount.mov"
                style={{
                    width: "200px",
                }}
                videoStyle={{ borderRadius: "10px" }}
                pausedOverlay={
                    <img
                        src="images/paramount.jpg"
                        alt=""
                        style={{
                            width: "200px",
                            height: "112.500px",
                            borderRadius: "15px",
                            padding: "5px",
                        }}
                    />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
            />
        </div>
    );
}

export default Title;

// imageList.map((image) => videoList.map((video) => hoverPlayer(video, image)))
