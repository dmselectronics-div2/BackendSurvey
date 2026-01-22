const express = require("express");
const { saveBivalviInfo, getAllBivalviInfo, getBivalviInfoById, deleteBivalviInfo, updateBivalviInfo } = require("../Controller/authController");


const router = express.Router();

// POST route to submit new data
router.post("/submit-bivalvi-form", saveBivalviInfo);

// GET route to retrieve all entries (with optional pagination and filtering)
router.get("/get-all-bivalvi", getAllBivalviInfo);

// GET route to retrieve a single entry by ID
router.get("/bivalvi-info/:id", getBivalviInfoById);

// DELETE route to delete an entry by ID
router.delete("/delete-bivalvi-info/:id", deleteBivalviInfo);

// PUT route to update an entry by ID
router.put("/update-bivalvi-info/:id", updateBivalviInfo);

module.exports = router;