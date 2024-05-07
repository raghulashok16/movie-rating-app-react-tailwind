import React from 'react'
import NavComponent from './NavComponent'
import MovieList from './MovieList'
const MovieSearch = () => {
    return (
        <div className='bg-black min-h-screen text-white'>
            <NavComponent />
            <div className='flex justify-center mb-4'>
                <div className='w-full h-[1px] bg-gray-400'>
                </div>

            </div>
            <MovieList />

        </div>
    )
}

export default MovieSearch
