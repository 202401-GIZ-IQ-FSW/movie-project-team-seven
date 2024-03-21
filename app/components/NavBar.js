"use client";
import React, { useEffect, useState } from 'react'
import Dropdwon from './Dropdwon'
import Link from 'next/link';

function NavBar() {

    const [genres, setGenres]=useState([])
    const [moviesValue, setMoviesValue] = useState(null);
    const [genresValue, setGenresValue] = useState(null);

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ba21689db16b6c3bc58c8f5c53ebd129')
            .then((response) => response.json())
            .then((data) => {
                const genresList = data.genres.map(genre => ({
                    value: genre.name, label: <Link href={{
                        pathname:"/Movies",
                        query: {
                            genreID: genre.id,
                            genreName: genre.name
                        }
                    }}>{genre.name}</Link>}));
                setGenres(genresList);
            })  //set the data to our state variable
    },[])

// console.log(genresValue,moviesValue);
    const Moviesoptions=[
        {value: "top_rated", label:<Link href="/Movies/top_rated">Top Rate</Link>},
        {value: "populer", label:<Link href="/Movies/populer">Popular</Link>},
        {value: "latest", label:<Link href="/Movies/latest">Latest</Link>},
        {value: "now_playing", label:<Link href="/Movies/now_playing">Now playing</Link>},
        {value: "upcoming", label:<Link href="/Movies/upcoming">Upcoming</Link>},
    ]
  return (
    //   Navbar - The Navbar should show up on all pages and contains the following:
    <nav className="w-full px-4 flex flex-nowrap items-center justify-between bg-black py-2 lg:flex-wrap lg:py-4">
        
        {/* 1. Logo - This could be a design or simply text of your page. */}
        {/* <img src="" alt="logo"/> */}
        <Link href="/"><i class="fa-brands fa-playstation text-[40px] hover:text-cyan-400"></i></Link>
        <div className="flex flex-nowrap gap-x-4 items-center justify-between">
            {/* 2. Genres - This is a drop down that include the genres of all movies. The Genres should be fetched from the API. */}
            <Dropdwon name="Genres" options={genres} setValue={setGenresValue} />
            
            {/* 3. Movies - This is another dropdown that contains the following options ["Top Rate", "Popular", "Latest", "Now playing", "Upcoming"] - Clicking on one of these options takes the user to the movies page (#2) and gives them the corresponding data. Each one of those has a dedicated API route. */}
            <Dropdwon name="Movies" options={Moviesoptions} setValue={setMoviesValue}/>
    
            {/* 4. Actors - Goes to the Actors page (#4) and shows a list of all popular actors. */}
            <button className='hover:bg-gray-800 rounded-lg py-2 px-6'><Link href="/actors">Actors</Link></button>
        </div>

        <div className='relative'>
            <input placeholder='Search' className='relative peer z-10 bg-transparent w-12 h-12 rounded-full border pl-12 focus:w-full focus:cursor-text focus:pl-16'/>
            <i className="fa-solid fa-magnifying-glass absolute right-[-15px] bottom-[-15px] inset-y-0 my-auto h-8 w-12 border-r border-transparent"></i>
        </div>
    </nav>
  )
}

export default NavBar