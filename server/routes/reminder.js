import express from "express";

import {
  getReminders,
  createReminder,
  updateReminder,
  deleteReminder,
} from "../controllers/reminder.js";

const router = express.Router();

router.route("/").get(getReminders).post(createReminder);
router.route("/:id").put(updateReminder).delete(deleteReminder);

export default router;
