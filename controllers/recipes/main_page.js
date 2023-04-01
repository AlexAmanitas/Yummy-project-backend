const { HttpError, ctrlWrapper } = require('../../helpers');

const Recipe = require('../../models/recipe');

const mainPage = async (req, res) => {
  const array1 = await Recipe.find({ category: 'Breakfast' }, '', {
    limit: 4,
  });
  const array2 = await Recipe.find({ category: 'Miscellaneous' }, '', {
    limit: 4,
  });
  const array3 = await Recipe.find({ category: 'Chicken' }, '', {
    limit: 4,
  });
  const array4 = await Recipe.find({ category: 'Dessert' }, '', {
    limit: 4,
  });

  const data = [...array1, ...array2, ...array3, ...array4];
  res.status(200).json({
    status: 'success',
    code: 200,
    data,
  });
};

module.exports = mainPage;
