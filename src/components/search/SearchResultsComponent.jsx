import MovieDetails from "../movieDetails/MovieDetails"
import { useGlobalContext } from "../../context"
import Row from 'react-bootstrap/Row';

const SearchResultsComponent = () => {
    const { listOfMovies } = useGlobalContext()

    if (listOfMovies === undefined) {
        return (
          <section className="search-results text-center ">
            <h4 className="mt-5">
                No Results Found
            </h4>
          </section>
        )
      }

    return (
        <section className="search-results">
            <Row xs={1} md={2} lg={5} className="g-4">                
                {listOfMovies.map(movie => {
                    // console.log(movie);
                    return <MovieDetails key={movie.imdbID} {...movie} />
                })}
            </Row>
        </section>
    )
}

export default SearchResultsComponent
