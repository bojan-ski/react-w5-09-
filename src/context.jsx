import axios from "axios";
import { createContext, useContext, useState } from "react";

const AppContext = createContext()

const apiKey = import.meta.env.VITE_OMDB_API_KEY
const url = import.meta.env.VITE_OMDB_URL

export const AppProvider = ({ children }) => {
    const [listOfMovies, setListOfMovies] = useState([])

    const getMovieDetails = async (searchTerm) => {
        const search = `${url}?s=${searchTerm}&apikey=${apiKey}`

        try {
            const result = await axios(search)
            const movies = result.data.Search
            // console.log(movies);
            setListOfMovies(movies)
        } catch (error) {
            console.log(error);
        }
    }

    return <AppContext.Provider value={{ listOfMovies, getMovieDetails }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)