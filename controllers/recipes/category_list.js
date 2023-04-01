const { HttpError, ctrlWrapper } = require('../../helpers');

const categoryList = async (req, res) => {
  const categoryList = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];

  res.status(200).json({
    status: 'success',
    code: 200,
    data: { categoryList },
  });
};

module.exports = categoryList;
