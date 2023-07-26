import asyncHandler from "express-async-handler";
import Reminder from "../models/reminder.js";

const getReminders = asyncHandler(async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.status(200).json(reminders);
    console.log(reminders);
  } catch (error) {
    res.status(400);
    throw new Error("No reminders");
  }
});

const createReminder = asyncHandler(async (req, res) => {
  const {
    title,
    message,
    level,
    startDate,
    endDate,
    receivedBy,
    projectStatus,
  } = req.body;

  try {
    const newReminder = await Reminder.create({
      title,
      message,
      level,
      startDate,
      endDate,
      receivedBy,
      projectStatus,
    });
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(400);
    throw new Error("Reminder creation failed");
  }
});

const updateReminder = asyncHandler(async (req, res) => {
  res.send("Update Reminder");
});

const deleteReminder = asyncHandler(async (req, res) => {
  res.send("Delete Reminder");
});

export { getReminders, createReminder, updateReminder, deleteReminder };
