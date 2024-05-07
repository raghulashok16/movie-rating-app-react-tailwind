import React from 'react'

const MovieCard = ({ movie }) => {
    const { id, title, overview, vote_average, release_date, poster_path } = movie;
    // console.log(id, title, overview, vote_average, release_date)
    return (
        <div className='w-[10rem] m-9 hover:scale-110 duration-200 '>
            <a href="" className='relative group'>
                <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt="" />
                <div className='absolute bottom-0 p-2 group-hover:bg-gradient-to-t from-black from-40% ... opacity-0 group-hover:opacity-100 duration-200 '>
                    <h3 className='text-xs font-extrabold text-yellow-300'>{title}</h3>
                    <div className='flex flex-row justify-between'>
                        <p className='text-ssss text-yellow-300'>{release_date}</p>
                        <p className='text-ssss text-yellow-300'>{vote_average.toFixed(1)}</p>
                    </div>
                    <p className='text-ss mt-1 line-clamp-2'>{overview}</p>
                </div>
            </a>
        </div>
    )
}

export default MovieCard
