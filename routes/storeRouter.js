const express = require("express");
const storeRouter = express.Router();


const storeController = require("../Controllers/storeController");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavouriteList);

storeRouter.post("/favourites", storeController.postToAddFavourites);

storeRouter.get("/homes/:homeId", storeController.getHomeDetails);

storeRouter.post("/favourites/delete/:homeId", storeController.postRemoveFromFavourites);

module.exports = storeRouter;
