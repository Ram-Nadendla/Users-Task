const express = require("express");
const router = express.Router();
const Users = require("../model/UsersModel");
const bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", async (req, res) => {
  try {
    const users = await Users.find()
      .sort({ createdAt: -1 })
      .skip(req.body.skip)
      .limit(req.body.limit);
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});
router.post("/", urlencodedParser, async (req, res) => {
  const userBody = new Users({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    address: {
      street: req.body.street,
      locality: req.body.locality,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      coordinatesType: req.body.coordinatesType,
      // coordinates: [Number],
    },
  });
  try {
    const a1 = await userBody.save();
    res.send(a1);
  } catch (err) {
    res.send(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id);
    user.email = req.body.email;
    const a2 = await user.save();
    res.send(a2);
  } catch (err) {
    res.send(err);
  }
});
router.delete("/:id", async (req, res) => {
  var deletedRec = {
    _id: req.params.id,
  };
  try {
    const user = await Users.deleteOne(deletedRec);
    res.send("Record Deleed");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
