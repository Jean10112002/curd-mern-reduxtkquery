import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useCreateLibroMutation,
  useUpdateLibroMutation,
} from "../services/api.books";
const initialState = {
  titulo: "",
  descripcion: "",
  author: "",
};
const FormBook = () => {
  const [createLibro] = useCreateLibroMutation();
  const [updateLibro] = useUpdateLibroMutation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState(initialState);
  

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = () => {
    if (id) {
      console.log("update");
      const {_id,author,descripcion,titulo}=input
      updateLibro({author,descripcion,titulo},_id);
    } else {
      console.log("create");
      createLibro(input);
    }
    setInput(initialState);
    navigate("/");
  };

  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Books</h5>
            <div className="form-group mt-5">
              <label htmlFor="title">Titulo</label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                id="title"
                required
                name="titulo"
                value={input.titulo}
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="author">author</label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                id="author"
                name="author"
                required
                value={input.author}
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="descripcion">Descripcion</label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                id="descripcion"
                name="descripcion"
                required
                value={input.descripcion}
                className="form-control"
              />
              <div className="d-grid mt-4 gap-2 d-md-block">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={onClick}
                >
                  {id ? "Editar" : "Crear"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormBook;
