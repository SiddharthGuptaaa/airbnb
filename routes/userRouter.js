const express = require("express");

const userRouter = express.Router();

const {registeredHomes}=require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home",{registeredHomes:registeredHomes,pageTitle:'airbnb Home'});
});

module.exports = userRouter;
