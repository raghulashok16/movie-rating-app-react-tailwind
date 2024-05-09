import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import Fire from "../assets/fire.svg";
import Spinner from "../assets/spinner.svg";

import MovieCard from './MovieCard';
const MovieList = ({ linkname }) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [rating, setRating] = useState(0);
    const [sort, useSort] = useState({
        by: 'default',
        order: 'asc',
    });
    const [errors, setErrors] = useState('');

    useEffect(() => { fetchMovies() }, [linkname]);
    useEffect(() => {
        if (sort.by != 'default') {
            const sortedMovie = _.orderBy(filteredMovies, [sort.by], [sort.order]);
            setFilteredMovies(sortedMovie);
        } else {
            setFilteredMovies(movies);
        }
    }, [sort]);

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${linkname}?api_key=c7548debf7c3c70ef38c0a1041ef40c5`);
            const data = await response.json();
            setMovies(data.results);
            setFilteredMovies(data.results);
        } catch (error) {
            setErrors(error.name);
        }
        // const response = await fetch(`https://api.themoviedb.org/3/movie/${linkname}?api_key=c7548debf7c3c70ef38c0a1041ef40c5`);
        // console.log(response);
        // const data = await response.json();
        // setMovies(data.results);
        // setFilteredMovies(data.results);
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
    };

    const handleSort = (e) => {
        const { name, value } = e.target;
        useSort(pre => ({ ...pre, [name]: value }));
    };
    const currentTitle = {
        popular: 'Popular',
        top_rated: 'Top Rated',
        now_playing: 'Now Playing',
    };

    return (
        <>
            <header className='flex px-5'>
                <h3>{currentTitle[linkname]}</h3>
                <div className='ms-auto flex select-none'>
                    <ul className='flex flex-row '>
                        <li className={`pr-2 cursor-pointer ${rating === 8 && 'underline'}`} onClick={() => handleRating(8)}>8+ Star</li>
                        <li className={`pr-2 cursor-pointer ${rating === 7 && 'underline'}`} onClick={() => handleRating(7)}>7+ Star</li>
                        <li className={`pr-2 cursor-pointer ${rating === 6 && 'underline'}`} onClick={() => handleRating(6)}>6+ Star</li>
                    </ul>
                    <select name="by" id="" className='mr-1  bg-black' onChange={handleSort} value={sort.by}>
                        <option value="default">SortBy</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="order" id="" className=' bg-black' onChange={handleSort} value={sort.order}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </header>
            <div className='flex justify-evenly flex-wrap mt-9'>
                {
                    filteredMovies.length >= 1 ?
                        filteredMovies.map(movie => (<MovieCard key={movie.id} movie={movie} />)) :
                        (
                            errors === '' ?
                                (<img src={Spinner} className='w-7 mt-[5rem] animate-spin' alt="" />) :
                                (<p className='text-white text-xl text-center mt-[5rem]'>API LINK NOT WORKING TRY AFTER SOMETIME...</p>)
                        )
                }
            </div>
        </>
    )
}

export default MovieList
