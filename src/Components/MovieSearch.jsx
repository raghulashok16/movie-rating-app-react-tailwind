import React, { useState } from 'react'
import NavComponent from './NavComponent'
import MovieList from './MovieList'
const MovieSearch = () => {
    const [linkname, setLinkname] = useState('popular');

    // console.log(linkname)
    return (
        <div className='bg-black min-h-screen text-white'>
            <NavComponent setLinkname={setLinkname} />
            <div className='flex justify-center mb-4'>
                <div className='w-full h-[1px] bg-gray-400'>
                </div>
            </div>
            <MovieList linkname={linkname} />
        </div>
    )
}

export default MovieSearch
