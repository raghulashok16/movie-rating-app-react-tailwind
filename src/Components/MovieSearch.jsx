import React from 'react'
import NavComponent from './NavComponent'
import MovieList from './MovieList'
const MovieSearch = () => {
    return (
        <div className='bg-black min-h-screen text-white'>
            <NavComponent />
            <MovieList />

        </div>
    )
}

export default MovieSearch
