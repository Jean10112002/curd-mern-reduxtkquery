import Libro from "../models/Libro.js";
import { schemaLibro } from "../validate/createLibrosValidate.js";
export const getLibrosController = async (req, res) => {
  const libros = await Libro.find({});
  return res.status(200).json({
    message: "libros obtenidos",
    books: libros,
  });
};
export const postLibrosController = async (req, res) => {
  const { error } = schemaLibro.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      books: error.details[0].context.value,
    });
  }
  const { author, titulo, descripcion } = req.body;
  const libroExist = await Libro.findOne({ titulo: titulo });

  if (libroExist) {
    return res.status(400).json({
      message: "libro ya existe",
    });
  }
  const libros = new Libro({ author, titulo, descripcion });
  libros.save();
  return res.status(200).json({
    message: "libro creado",
    books: libros,
  });
};
export const getLibrosControllerOne = async (req, res) => {
  const { id } = req.params;
  const book = await Libro.findById(id);
  return res.status(200).json({
    books: book,
    message: "libro obtenido",
  });
};
export const updateLibrosController = async (req, res) => {
  const { error } = schemaLibro.validate(req.body);
  const {id}=req.params;
  const {author,titulo,descripcion}=req.body;
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      books: error.details[0].context.value,
    });
  }
  const libros = await Libro.updateOne(
    { _id: id },
    { $set: { author, titulo, descripcion } }
  );

  return res.status(200).json({
    books: libros,
    message: "libro actualizado",
  });
};
export const deleteLibrosController = async (req, res) => {
    const {id}=req.params;
  const libros = await Libro.findByIdAndDelete(id);
  return res.status(200).json({
    books: libros,
    message: "deleted",
  });
};
