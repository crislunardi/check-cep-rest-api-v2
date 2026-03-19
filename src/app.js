import express from "express";
import cepRoutes from "./routes/cep.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api", cepRoutes);

app.use(errorHandler);

export default app;