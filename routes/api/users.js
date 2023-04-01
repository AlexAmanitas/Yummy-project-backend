const express = require('express');

const router = express.Router();

const { auth, validateBody, upload } = require('../../middlewares');

const {
  userRegisterSchema,
  userLoginSchema,
  userStatusSchema,
  userVerifySchema,
} = require('../../schemas/users');

const {
  register,
  logIn,
  logOut,
  getCurrentUser,
  updateUser,
  updateAvatar,
  userVerification,
  resendEmail,
} = require('../../controllers/auth');

router.post('/signup', validateBody(userRegisterSchema), register);

router.post('/login', validateBody(userLoginSchema), logIn);

router.get('/logout', auth, logOut);

router.get('/current', auth, getCurrentUser);

router.patch('/', auth, validateBody(userStatusSchema), updateUser);

router.patch('/avatar', auth, upload.single('avatar'), updateAvatar);

router.get('/verify/:verificationToken', userVerification);

router.post('/verify', validateBody(userVerifySchema), resendEmail);

module.exports = router;
