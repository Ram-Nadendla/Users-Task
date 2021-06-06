// Router 
//Imported the require packages..
const express = require("express");
const router = express.Router();
const Users = require("../model/UsersModel");
const bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//Get all Users
router.get("/", async (req, res) => {
  try {
    //Added the users sorted by createdAt timestamp with Pagination
    const users = await Users.find().sort({ createdAt: -1 })
    .skip(req.body.skip).limit(req.body.limit);
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

//Create a new User
router.post("/", urlencodedParser, async (req, res) => {
  // find out which post you are user
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
    // get the comment text and record post data
    // save userdata
  });
  try {
    const userDataSave = await userBody.save();
   
    res.send(userDataSave);
  
  } catch (err) {

    res.send(err);
  }

});

//Geting the particular user data
router.get("/:id", async (req, res) => {
  //Based on id we will identify the specific user
  try {
  
    const user = await Users.findById(req.params.id);
  
    res.send(user);
  
  } catch (err) {
  
    res.send(err);
  }

});

//Update  the existing user 
router.patch("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id);
    if (req.body.name) {
      user.name = req.body.name
    };
    if (req.body.email) {
      user.email = req.body.email
    };
    if (req.body.mobile) {
      user.mobile = req.body.mobile
    };
    if (req.body.street) {
      user.street = req.body.street
    }
    if (req.body.locality) {
      user.locality = req.body.locality,
      };
    if (req.body.city) {
      user.city = req.body.city
    }
    if (req.body.state) {
      user.state = req.body.state
    };
    if (req.body.pincode) {
      user.pincode = req.body.pincode
    };
    if (req.body.coordinatesType) {
      user.coordinatesType = req.body.coordinatesType
    };

    const a2 = await user.save();

    res.send(a2);

  } catch (err) {

    res.send(err);

  }

});

//Delete an User
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
