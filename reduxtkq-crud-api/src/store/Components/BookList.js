import {  useNavigate} from 'react-router-dom';
import { useDeleteLibroMutation} from '../services/api.books';

const BookList = ({ book }) => {
  const navigate=useNavigate()
  const [deleteLibro]=useDeleteLibroMutation()

  const EditBook=(id)=>{
      navigate('/update/'+id)
  }
  const DeleteBook=(id)=>{
    deleteLibro(id)
    console.log("eliminar " + id)
  }
  return (
    <tr>
      <td> {book.titulo} </td>
      <td>
        <blockquote>{book.author}</blockquote>
      </td>
      <td> {book.descripcion} </td>
      <td >
        <button className="btn btn-info" onClick={() => EditBook(book._id)}>
          Editar
        </button>
        <button className="btn btn-danger mx-2" onClick={() => DeleteBook(book._id)}>
          Eliminar
        </button>
      </td>
        
    </tr>
  );
};

export default BookList;
