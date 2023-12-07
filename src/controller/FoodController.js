const Food = require("../entity/Food");

const createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(200).json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred " });
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
  }
};

const getFoodList = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 5;

  try {
    const skip = (page - 1) * perPage;

    const food = await Food.find().skip(skip).limit(perPage);

    res.status(200).json({ food });
  } catch (err) {
    next(err);
  }
};

const updateFoodById = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
  }
};

const deleteFoodById = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
  }
};

const searchByIngredient = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 5;
  const skip = (page - 1) * perPage;
  try {
    const ingredientName = req.params.ingredientName;

    const foods = await Food.find({
      ingredients: { $regex: new RegExp(ingredientName, "i") },
    })
      .skip(skip)
      .limit(perPage);

    res.status(200).json({ foods });
  } catch (err) {
    next(err);
  }
};

const searchByBMIRange = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 5;
  const skip = (page - 1) * perPage;

  try {
    const minBMI = parseFloat(req.params.min);
    const maxBMI = parseFloat(req.params.max);

    if (isNaN(minBMI) || isNaN(maxBMI)) {
      return res.status(400).json({ error: "Invalid BMI values" });
    }

    const foods = await Food.find({
      "bmiRange.min": { $lte: maxBMI },
      "bmiRange.max": { $gte: minBMI },
    })
      .skip(skip)
      .limit(perPage);

    res.status(200).json({ foods });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createFood,
  getFoodById,
  getFoodList,
  updateFoodById,
  deleteFoodById,
  searchByIngredient,
  searchByBMIRange,
};
