import React from 'react'

const MovieCard = () => {
    return (
        <div className='w-[10rem] m-9 hover:scale-110 duration-200 '>
            <a href="" className='relative group'>
                <img src="https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg" alt="" />
                <div className='absolute bottom-0 p-2 group-hover:bg-gradient-to-t from-black from-15% ... opacity-0 group-hover:opacity-100 duration-200 '>
                    <h3 className='text-xs'>Movie Name</h3>
                    <div className='flex flex-row justify-between'>
                        <p className='text-ssss text-yellow-300'>10-20-2020</p>
                        <p className='text-ssss text-yellow-300'>8.0</p>
                    </div>
                    <p className='text-ss mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus a ducimus in magnam est!</p>
                </div>
            </a>
        </div>
    )
}

export default MovieCard
