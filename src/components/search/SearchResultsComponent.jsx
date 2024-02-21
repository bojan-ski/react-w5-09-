import axios from "axios"
import MovieDetails from "../movieDetails/MovieDetails"
import { useState } from "react"

const apiKey = import.meta.env.VITE_OMDB_API_KEY
const url = import.meta.env.VITE_OMDB_URL

const SearchResultsComponent = ({ searchTerm }) => {
    const [listOfMovies, setListOfMovies] = useState([])

    if (!searchTerm) return

    const search = `${url}?s=${searchTerm}&apikey=${apiKey}`

    const getMovieDetails = async () => {
        try {
            const result = await axios(search)
            const movieInformation = result.data.Search
            // console.log(movieInformation);
            setListOfMovies(movieInformation)
        } catch (error) {
            console.log(error);
        }
    }

    getMovieDetails()

    return (
        <section className="section-details">
            {listOfMovies.map((movie, idx) => {
                return <MovieDetails key={idx} {...movie}/>   
            })}
        </section>
    )
}

export default SearchResultsComponent
