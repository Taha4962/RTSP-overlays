const express = require("express");
const Overlay = require("../models/overlays.models.js");
const router = express.Router();

// Create Overlay
router.post("/", async (req, res) => {
  const { content, position, size } = req.body;
  try {
    const overlay = new Overlay({ content, position, size });
    await overlay.save();
    res.status(201).json(overlay);
  } catch (error) {
    res.status(400).json({ error: "Failed to create overlay" });
  }
});

// Get All Overlays
router.get("/", async (req, res) => {
  try {
    const overlays = await Overlay.find();
    res.json(overlays);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch overlays" });
  }
});

// Update Overlay
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { content, position, size } = req.body;
  try {
    const overlay = await Overlay.findByIdAndUpdate(
      id,
      { content, position, size },
      { new: true }
    );
    res.json(overlay);
  } catch (error) {
    res.status(400).json({ error: "Failed to update overlay" });
  }
});

// Delete Overlay
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Overlay.findByIdAndDelete(id);
    res.json({ message: "Overlay deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete overlay" });
  }
});

module.exports = router;
