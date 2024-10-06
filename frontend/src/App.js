import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "./components/VideoPlayer";
import OverlayControls from "./components/OverlayControls";
import "./App.css";

const App = () => {
  const [overlays, setOverlays] = useState([]);
  const [rtspUrl, setRtspUrl] = useState("");

  useEffect(() => {
    // Fetch overlays from the backend when the app loads
    axios
      .get("/api/overlays")
      .then((response) => {
        setOverlays(response.data); // Set the fetched overlays in state
      })
      .catch((error) => {
        console.error("Error fetching overlays:", error);
      });
  }, []);

  const handleAddOverlay = (newOverlay) => {
    setOverlays([...overlays, newOverlay]);
  };

  return (
    <div className="App">
      <h1>Livestream Video with Overlays</h1>

      <input
        type="text"
        placeholder="Enter RTSP URL"
        value={rtspUrl}
        onChange={(e) => setRtspUrl(e.target.value)}
      />

      <VideoPlayer url={rtspUrl} overlays={overlays} />

      <OverlayControls onAddOverlay={handleAddOverlay} />
    </div>
  );
};

export default App;
