import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteMovie } from "../reducer/movies.reducer";
import Home from "./Home";

function MoviesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state?.movies?.moviesList);

  const handleUpdate = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <>
      <Home />
      <div className="container mt-5">
        {movies?.length !== 0 ? (
          <>
            <h2 className="text-center mb-4">Movies Management</h2>
            
            <div className="table-responsive shadow-lg rounded p-3 bg-white">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Director</th>
                    <th>Rating</th>
                    <th>Budget</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {movies?.map((movie,index) => (
                    <tr key={movie.id}>
                      <td>{index+1}</td>
                      <td>{movie?.title}</td>
                      <td>{movie?.genre}</td>
                      <td>{movie?.director}</td>
                      <td>{movie?.rating}</td>
                      <td>{movie?.budget} Cr </td>
                      <td className="d-flex">
                        <button className="btn btn-danger me-2" onClick={() => handleDelete(movie?.id)}>
                          Delete
                        </button>
                        <button className="btn btn-warning" onClick={() => handleUpdate(movie?.id)}>
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ):
        <>
        <h2 className="text-center mb-4">No Movies Found</h2>
        </>
        }
      </div>
    </>
  );
}

export default MoviesList;
