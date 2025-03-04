const express = require("express");
const Model = require("../models/model");

const router = express.Router();

//POST METHOD
router.post("/post", async (req, res) => {
  try {
    const data = new Model({
      name: req.body.name,
      age: req.body.age,
    });

    const dataToSave = await data.save();
    //ALWAYS add return after sending a response
    return res.status(200).json(dataToSave);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

//GET ALL METHOD
router.get("/getAll", async (req, res) => {
  /* res.send("Get All API"); */
  try {
    const data = await Model.find();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  /* res.send(req.params.id); */
  try {
    const data = await Model.findById(req.params.id);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  /* res.send("Update by ID API"); */
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    return res.send(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

//DELETE by ID Method
router.delete("/delete/:id", async (req, res) => {
  /* res.send("DELETE by ID API"); */
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    return res.send(`Document with ${data.name} has been deleted...`);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
