const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
   validate(userValidation.createUser),
   userController.createUser
);

/** Get user list */
router.get(
  "/list",
  validate(userValidation.getUserList),
  userController.getUserList
);

router.post(
  "/send-mail",
  validate(userValidation.sendMail),
  userController.sendMail
);

module.exports = router;