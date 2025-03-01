import express from "express";
import morgan from "morgan";
import cors from "cors";
import productsRouter from './rutes/products.rutes.js';

// 1. Primero inicializa la app
const app = express();

// 2. Luego configura los middlewares
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(morgan("dev"));
app.use(express.json());

// 3. Configura las rutas
app.use("/groceries/products", productsRouter);

// 4. Finalmente inicia el servidor
app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});

export default app; 