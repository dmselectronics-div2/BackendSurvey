require("dotenv").config();
const express = require("express");
const mongoose = require("./configDB/db");
const bivalviRoutes = require("./bivalviRoutes/authRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(bivalviRoutes);

app.post('/submit-bivalvi-form', async (req, res) => {
  try {
    const formData = req.body;
    console.log("formData", formData);
    // Check if the request body is empty
    if (!formData) {
      return res.status(400).json({ message: "Form data is required" });
    }

    // Create a new entry using the correct model
    const newEntry = new BivalviInfo(formData);

    // Save to MongoDB
    await newEntry.save();

    res.status(201).json({ message: "Form submitted successfully", newEntry });
  } catch (error) {
    console.error("Error saving form data:", error.message);

    app.get('/submit-bivalvi-form', async (req, res) => {
      try {
        const formData = await BivalviInfo.find();
        console.log("formData", formData);
        // Check if the request body is empty
        if (!formData) {
          return res.status(400).json({ message: "Form data is required" });
        }
        

        // Create a new entry using the correct model
        const newEntry = new BivalviInfo(formData);

        // Save to MongoDB
        await newEntry.save();

        res.status(201).json({ message: "Form submitted successfully", newEntry });
      } catch (error) {
        console.error("Error saving form data:", error.message);

        res.status(500).json({
          message: "Internal server error",
          error: error.message
        });

      }
    });

    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });

  }
});
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});