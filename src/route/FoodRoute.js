const router = require("express").Router();

const FoodController = require("../controller/FoodController");

router.post("/create", FoodController.createFood);

router.get("/single/:id", FoodController.getFoodById);

router.get("/", FoodController.getFoodList);

router.put("/update/:id", FoodController.updateFoodById);

router.delete("/delete/:id", FoodController.deleteFoodById);

router.get(
  "/search/ingredient/:ingredientName",
  FoodController.searchByIngredient
);

router.get("/search/bmi/:min/:max", FoodController.searchByBMIRange);

module.exports = router;
