const express = require("express");

const router = express.Router();

//POST METHOD
router.post("/post", (req, res) => {
  res.send("Post API");
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
