import React from 'react'
import Fire from "../assets/fire.svg";
import Star from "../assets/star.svg";
import Upcoming from "../assets/upcoming.svg";
const NavComponent = ({ setLinkname }) => {
    return (
        <nav className='pt-5 pb-4 px-5 flex'>
            <h1 className='inline text-2xl font-bold text-yellow-300' >Movie Query</h1>
            <div className='inline ms-auto'>
                <button onClick={() => setLinkname('popular')}>Popular <img src={Fire} className='w-4 pb-1  inline mr-4' alt="" /></button>
                <button onClick={() => setLinkname('top_rated')}>Top Rated <img src={Star} className='w-4 inline pb-1  mr-4' alt="" /></button>
                <button onClick={() => setLinkname('now_playing')}>Now Playing <img src={Upcoming} className='w-4 inline pb-1 mr-4' alt="" /></button>
            </div>
        </nav>
    )
}

export default NavComponent
