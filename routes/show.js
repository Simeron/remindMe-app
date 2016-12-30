const express = require("express");
const router = express.Router();
const showController = require("../controllers/showController");

router.post("/ReminderMessage", showController.showReminder);


module.exports = router;