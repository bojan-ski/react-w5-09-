import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MovieDetails = (movieData) => {
  // console.log(movieData);
  const { Poster, Title, Year, Type } = movieData

  return (
    <div className="movie-details ">
      <Card>
        <Card.Img src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Product Type: {Type}</ListGroup.Item>
        <ListGroup.Item>Release Date: {Year}</ListGroup.Item>
      </ListGroup>
      </Card>
    </div>
  )
}

export default MovieDetails;