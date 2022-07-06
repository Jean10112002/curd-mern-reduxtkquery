import mongoose from "mongoose";
import { config } from "../config/config.js";
    mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
      console.log("Conexion a la base de datos establecida");
    })
    .catch(() => {
      console.log("Error al conectar a la base de datos");
    });
  
