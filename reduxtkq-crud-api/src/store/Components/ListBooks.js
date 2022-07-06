import { useGetLibrosQuery } from "../services/api.books";
import BookList from "./BookList";

const ListBooks = () => {
  
  const { data, error, isLoading } = useGetLibrosQuery();

  return (
    <div className="container mt-5">
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-white text-center">{error.error}</div>
      ) : (
        <div className="row  ">
          <div className="col-md-8 mx-auto">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.books.map((book) => (
                  <BookList key={book._id} book={book} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListBooks;
