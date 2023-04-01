const { HttpError, ctrlWrapper } = require('../../helpers');

const mainPage = async (req, res) => {
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {},
  });
};

module.exports = mainPage;
