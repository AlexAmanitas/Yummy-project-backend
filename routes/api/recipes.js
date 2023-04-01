const express = require('express');

const router = express.Router();

const { validateBody, auth } = require('../../middlewares');

const {
  contactPostShema,
  contactPutShema,
  contactPatchShema,
} = require('../../schemas/contacts');

const { categoryList, mainPage } = require('../../controllers/recipes');

router.get('/category-list', categoryList);

router.get('/main-page', mainPage);

// router.post('/', auth, validateBody(contactPostShema), add);

// router.delete('/:contactId', auth, deleteById);

// router.put('/:contactId', auth, validateBody(contactPutShema), updateById);

// router.patch(
//   '/:contactId/favorite',
//   auth,
//   validateBody(contactPatchShema),
//   updateStatus
// );

module.exports = router;
