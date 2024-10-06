import React, { useState } from "react";

const OverlayControls = ({ onAddOverlay }) => {
  const [content, setContent] = useState("");
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [size, setSize] = useState({ width: 100, height: 50 });

  const handleAddOverlay = async () => {
    const newOverlay = { content, position, size };

    // Save overlay to backend
    const response = await fetch("/api/overlays", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOverlay),
    });

    const savedOverlay = await response.json();
    onAddOverlay(savedOverlay);

    // Clear inputs
    setContent("");
    setPosition({ top: 0, left: 0 });
    setSize({ width: 100, height: 50 });
  };

  return (
    <div className="overlay-controls">
      <h3>Add Overlay</h3>
      <input
        type="text"
        placeholder="Overlay Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Top Position"
        value={position.top}
        onChange={(e) => setPosition({ ...position, top: e.target.value })}
      />
      <input
        type="number"
        placeholder="Left Position"
        value={position.left}
        onChange={(e) => setPosition({ ...position, left: e.target.value })}
      />
      <br />
      <input
        type="number"
        placeholder="Width"
        value={size.width}
        onChange={(e) => setSize({ ...size, width: e.target.value })}
      />
      <input
        type="number"
        placeholder="Height"
        value={size.height}
        onChange={(e) => setSize({ ...size, height: e.target.value })}
      />
      <br />
      <button onClick={handleAddOverlay}>Add Overlay</button>
    </div>
  );
};

export default OverlayControls;
