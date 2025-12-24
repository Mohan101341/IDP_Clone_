import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import counsellingRoutes from "./routes/counsellingRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/counselling", counsellingRoutes);

export default app;
