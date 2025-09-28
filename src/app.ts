import express from "express";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Bem-vindo à API de Products!");
});

export default app;