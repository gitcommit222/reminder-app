import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const port = process.env.PORT || 5001;
import connectDB from "./config/db.js";
import reminderRoutes from "./routes/reminder.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/reminders", reminderRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
