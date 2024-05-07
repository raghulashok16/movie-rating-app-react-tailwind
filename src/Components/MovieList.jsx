import React from 'react'
import Fire from "../assets/fire.svg";

import MovieCard from './MovieCard';
const MovieList = () => {
    return (
        <>
            <header className='flex px-5'>
                <h3>Popular <img src={Fire} className='w-4 pb-1  inline mr-4' alt="" /></h3>
                <div className='ms-auto flex'>
                    <ul className='flex flex-row '>
                        <li className='pr-2'>8+ Star</li>
                        <li className='pr-2'>7+ Star</li>
                        <li className='pr-4'>6+ Star</li>
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
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}

export default MovieList
