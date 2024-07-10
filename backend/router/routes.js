const express = require("express");
const router = express.Router();

router.get("/artists", (req, res) => {
  // call database findAll
  res.json({
    data: [
      {
        _id: "",
        name: "",
        location: "",
        profile_image: "",
        description: "",
      },
    ],
  });
});

router.get("/partners", (req, res) => {
  // call database findAll
  res.json({
    data: [
      {
        _id: "",
        name: "",
        location: "",
        logo: "",
      },
    ],
  });
});

router.get("/collections/:id", (req, res) => {
  // call database findAllById
  res.json({
    data: [
      {
        _id: "",
        name: "",
      },
    ],
  });
});

router.get("/collections/artworks/:id", (req, res) => {
  // call database findAllById
  res.json({
    data: [
      {
        _id: "",
        image: "",
      },
    ],
  });
});

router.get("/featured-artists", (req, res) => {
  // call database findAll
  res.json({
    data: [
      {
        _id: "",
        name: "",
        location: "",
        profile_image: "",
        description: "",
        average_price: "",
      },
    ],
  });
});

router.get("/popular-styles", (req, res) => {
  // call database findAll
  res.json({
    data: [
      {
        _id: "",
        image: "",
        name: "",
        description: "",
      },
    ],
  });
});

module.exports = router;
