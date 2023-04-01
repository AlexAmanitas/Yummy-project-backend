const { HttpError, ctrlWrapper } = require('../../helpers');
const Recipe = require('../../models/recipe');

const getRcipesByCategory = async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 8 } = req.query;
  const paginationParams = { skip: (page - 1) * limit, limit: +limit };
  console.log(category, page, limit);

  const data = await Recipe.find({ category }, '', paginationParams);
  if (!data) {
    throw HttpError(404, 'Not found');
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    data,
  });
};

module.exports = ctrlWrapper(getRcipesByCategory);
