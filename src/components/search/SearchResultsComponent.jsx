import MovieDetails from "../movieDetails/MovieDetails"
import { useGlobalContext } from "../../context"

const SearchResultsComponent = () => {
    const { listOfMovies } = useGlobalContext()    

    return (
        <section className="section-details">
            {listOfMovies.map(movie => {
                // console.log(movie);
                return <MovieDetails key={movie.imdbID} {...movie} />
            })}
        </section>
    )
}

export default SearchResultsComponent
