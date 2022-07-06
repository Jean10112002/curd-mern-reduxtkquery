import express from "express";
import cors from "cors";
import morgan from "morgan";
import routeLibros from './routes/Libros.js'
import "./db/db.js";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use('/api/libros',routeLibros)

export default app;