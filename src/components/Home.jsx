import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  
  const handleAddMovie = () => {
    navigate("/add");
  };

  return (
    <div className="container mt-4">
      {/* Title and Button in Flexbox */}
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center flex-grow-1">Welcome to Movies Management App</h1>
        <button className="btn btn-primary" onClick={handleAddMovie}>Add Movie</button>
      </div>
    </div>
  );
}

export default Home;
