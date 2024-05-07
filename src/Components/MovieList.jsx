import React, { useEffect, useState } from 'react'
import Fire from "../assets/fire.svg";

import MovieCard from './MovieCard';
import { data } from 'autoprefixer';
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [rating, setRating] = useState(0);

    useEffect(() => { fetchMovies() }, []);

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c7548debf7c3c70ef38c0a1041ef40c5');
        const data = await response.json();
        setMovies(data.results);
        setFilteredMovies(data.results);
    };

    const handleRating = (rate) => {
        if (rate !== rating) {
            const newMovieList = movies.filter(movie => movie.vote_average > rate);
            setFilteredMovies(newMovieList);
            setRating(rate);
        } else {
            setFilteredMovies(movies);
            setRating(0);
        }

    }

    return (
        <>
            <header className='flex px-5'>
                <h3>Popular <img src={Fire} className='w-4 pb-1  inline mr-4' alt="" /></h3>
                <div className='ms-auto flex select-none'>
                    <ul className='flex flex-row '>
                        <li className={`pr-2 cursor-pointer ${rating === 8 && 'underline'}`} onClick={() => handleRating(8)}>8+ Star</li>
                        <li className={`pr-2 cursor-pointer ${rating === 7 && 'underline'}`} onClick={() => handleRating(7)}>7+ Star</li>
                        <li className={`pr-2 cursor-pointer ${rating === 6 && 'underline'}`} onClick={() => handleRating(6)}>6+ Star</li>
                    </ul>
                    <select name="SortBy" id="" className='pr-2  bg-black'>
                        <option value="">SortBy</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>
                    <select name="" id="" className='pl-2 bg-black'>
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>
            <div className='flex justify-evenly flex-wrap mt-9'>
                {
                    filteredMovies.map(movie => (<MovieCard key={movie.id} movie={movie} />))
                }
            </div>
        </>
    )
}

export default MovieList
