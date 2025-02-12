import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import { AppDataSource } from "./config/data-source";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT || 5011, () => console.log("Server running"));
});
