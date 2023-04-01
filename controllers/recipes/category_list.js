const { HttpError, ctrlWrapper } = require('../../helpers');

const categoryList = async (req, res) => {
  const categoryList = [
    { 1: 'Beef' },
    { 2: 'Breakfast' },
    { 3: 'Chicken' },
    { 4: 'Dessert' },
    { 5: 'Goat' },
    { 6: 'Lamb' },
    { 7: 'Miscellaneous' },
    { 8: 'Pasta' },
    { 9: 'Pork' },
    { 10: 'Seafood' },
    { 11: 'Side' },
    { 12: 'Starter' },
    { 13: 'Vegan' },
    { 14: 'Vegetarian' },
  ];

  res.status(200).json({
    status: 'success',
    code: 200,
    data: { categoryList },
  });
};

module.exports = ctrlWrapper(categoryList);
