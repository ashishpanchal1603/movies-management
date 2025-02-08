import { useState, useEffect,useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addMovie, updateMovie } from "../reducer/movies.reducer";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap"; // Bootstrap Components
import movieGenres from "../utils/movieGenres";
import directors from "../utils/director";



function MoviesForm() {
  const { movieId } = useParams();
  const id = useId()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state?.movies?.moviesList);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [budget , setBudget] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (movieId) {
      const find = movies?.find((movie) => movie?.id === movieId);
      setTitle(find?.title || "");
      setGenre(find?.genre || "");
      setDirector(find?.director || "");
      setBudget(find?.budget || "");
      setRating(find?.rating || "");
    }
  }, [movieId, movies]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const movieData = {
      id: movieId ? movieId :id ,
      title,
      genre,
      director,
      budget: parseInt(budget),
      rating: parseFloat(rating) || 0,
    };

    movieId ? dispatch(updateMovie(movieData)) : dispatch(addMovie(movieData));
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row className="w-100">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Card className="p-4 shadow-lg">
            <h2 className="text-center mb-4">{movieId ? "Update" : "Add"} Movie</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title <span className="required">*</span></Form.Label>
                <Form.Control type="text" value={title} placeholder="please enter title" onChange={(e) => setTitle(e?.target?.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Genre <span className="required">*</span></Form.Label>
                <Form.Select value={genre} onChange={(e) => setGenre(e?.target?.value)} required placeholder="please enter genre">
                  <option value="">Select Genre</option>
                  {movieGenres?.map((genre) => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Director <span className="required">*</span></Form.Label>
                <Form.Select value={director} onChange={(e) => setDirector(e?.target?.value)} required placeholder="please enter genre">
                  <option value="">Select Genre</option>
                  {directors?.map((director) => (
                    <option key={director} value={director}>{director}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Budget <span className="required">*</span></Form.Label>
                <Form.Control type="number" value={budget} onChange={(e) => setBudget(e?.target?.value)} required placeholder="please enter budget "/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rating <span className="required">*</span></Form.Label>
                <Form.Control type="number" step="0.1" value={rating} onChange={(e) => setRating(e?.target?.value)} placeholder="please enter rating" />
              </Form.Group>

              <div className="text-center">
                <Button variant="success" type="submit" className="w-100">
                  {movieId ? "Update" : "Submit"}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MoviesForm;
