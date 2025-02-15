"use client"; // Needed for App Router

import { useEffect, useRef, useState } from "react";

const SoundCloudPlayer = ({ trackUrl }) => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && iframeRef.current) {
      const widget = window.SC?.Widget(iframeRef.current);
      if (widget) {
        widgetRef.current = widget;

        // Reset state when track changes
        setIsPlaying(false);

        // Load new track
        widget.load(trackUrl, { auto_play: false });

        // Attach event listeners
        widget.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true));
        widget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false));
        widget.bind(window.SC.Widget.Events.FINISH, () => {
          setIsPlaying(false);
          widget.seekTo(0);
        });
      }
    }
  }, [trackUrl]); // Depend on trackUrl so it resets when changed

  const togglePlayPause = () => {
    if (widgetRef.current) {
      widgetRef.current.toggle();
    }
  };

  return (
    <div className="soundcloud-container">
      {/* Hidden SoundCloud player */}
      <iframe
        ref={iframeRef}
        style={{ display: "none" }}
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}`}
      ></iframe>

      {/* Custom Play/Pause Button */}
      <div className="listen available" onClick={togglePlayPause}>
        <img
          src={isPlaying ? "/icons/pause.png" : "/icons/play.png"}
          alt="music"
        />
        <p>{isPlaying ? "pause excerpt" : "listen to excerpt"}</p>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
