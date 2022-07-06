import FormBook from "./store/Components/FormBook";
import NavBar from "./store/Components/NavBar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ListBooks from "./store/Components/ListBooks";
import Error from "./store/Components/Error";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/" element={<ListBooks/>} />
      <Route path="/create" element={<FormBook />} />
      <Route path="/update/:id" element={<FormBook />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
