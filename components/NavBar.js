"use client";
import React, { useEffect, useState } from 'react'
import Dropdwon from './Dropdwon'
import SearchDropdown from './SearchDropdown';
import Link from 'next/link';
import Image from 'next/image';

export const Moviesoptions=[
    {value: "top_rated", label:'Top Rate'},
    {value: "popular", label:'Popular'},
    {value: "now_playing", label:'Now playing'},
    {value: "upcoming", label:'Upcoming'},
]
function NavBar() {

    const [genres, setGenres]=useState([])

    useEffect( () => {
        // fetch Genres from API
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ba21689db16b6c3bc58c8f5c53ebd129')
            .then((response) => response.json())
            .then((data) => {
                    const genresList = data.genres.map(genre => ({
                        value: genre.id, label: genre.name
                    }));
                //set the data to our state variable
                setGenres(genresList);
            })
    },[])


  return (
    //   Navbar - The Navbar should show up on all pages and contains the following:
    <nav className="md:sticky z-50 top-0 w-full py-1 px-4 grid grid-rows-2 grid-cols-[auto_auto] md:flex flex-wrap md:flex-nowrap items-center justify-between bg-gradient-to-bl from-cyan-800 lg:flex-wrap lg:py-4 font-serif">
        
        {/* Logo */}
        <div>
            <Link href="/" className='flex justify-center items-center gap-2'>
                <Image
                    quality={100}
                    unoptimized={true}
                    priority={true}
                    width={"100"} height={"100"}
                    className='w-[50px] ' 
                    src="/images/Phoenix-logo.png" alt='logo'/>
                <h1 className='max-sm:hidden text-cyan-600'>PHOENIX</h1>
            </Link>
        </div>
        
        <div className="flex flex-nowrap md:gap-x-4 items-center justify-between">
            {/* Genres - This is a drop down that include the genres of all movies. The Genres should be fetched from the API. */}
            <Dropdwon name="Genres" options={genres} />
            
            {/* Movies - This is another dropdown that contains the following options ["Top Rate", "Popular", "Latest", "Now playing", "Upcoming"] - Clicking on one of these options takes the user to the movies page (#2) and gives them the corresponding data. Each one of those has a dedicated API route. */}
            <Dropdwon name="Movies" options={Moviesoptions} />
    
            {/* Actors - Goes to the Actors page (#4) and shows a list of all popular actors. */}
            <Link href="/actors"><button className='hover:bg-gray-800 text-white rounded-lg py-2 px-6'>Actors</button></Link>
        </div>

            {/* Search Bar */}
        <div className='h-8 group relative col-span-2 md:ml-20'>
            <div className='group-hover:block border-b-[1px] border-gray-400 focus-within:border-cyan-300 has-[:focus]:block w-full md:w-[200px] md:hidden absolute right-0'>
                <SearchDropdown/>
            </div>
            <div className='w-8 h-8 flex justify-center items-center rounded-full border group-hover:invisible group-focus-within:invisible invisible md:visible'>
            <i className="fa-solid fa-magnifying-glass text-white"></i>
            </div>
        </div>
    </nav>
  )
}

export default NavBar