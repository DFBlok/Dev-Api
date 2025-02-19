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
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

//Update by ID Method
router.patch("/update/:id", (res, req) => {
  res.send("Update by ID API");
});

//DELETE by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("DELETE by ID API");
});

module.exports = router;
