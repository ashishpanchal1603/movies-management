import "./App.css";
import { Routes, Route } from "react-router";
import MoviesForm from "./components/MoviesForm";
import MoviesList from "./components/MoviesList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/add" element={<MoviesForm />} />
        <Route path="/edit/:movieId" element={<MoviesForm />} />
      </Routes>
    </>
  );
}

export default App;
