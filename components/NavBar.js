"use client";
import React, { useEffect, useState } from 'react'
import Dropdwon from './Dropdwon'
import SearchDropdown from './SearchDropdown';
import Link from 'next/link';


export const Moviesoptions=[
    {value: "top_rated", label:'Top Rate'},
    {value: "populer", label:'Popular'},
    {value: "latest", label:'Latest'},
    {value: "now_playing", label:'Now playing'},
    {value: "upcoming", label:'Upcoming'},
]
function NavBar() {

    const [genres, setGenres]=useState([])

    // get selected values for dropdowns 
    const [moviesValue, setMoviesValue] = useState(null);
    const [genresValue, setGenresValue] = useState(null);
    const [genresID, setGenresID] = useState(null);
    const [searchResults, setSearchResults] = useState('');


    // get selected movie info from searchbar
    const [movieInfo, setMovieInfo] = useState(null);
    
    /////// check there values
    // console.log("selected from genres dropdown: " + genresValue + " , id: " + genresID);
    // console.log("selected from movies dropdown: " + moviesValue);
    // console.log("searched movie info: ");
    // console.log(movieInfo);

    function handleSearchEnter(){
        console.log("Search results: " , searchResults)
    }
    
    useEffect( () => {
        // fetch Genres from API
        // console.log("use effect")
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ba21689db16b6c3bc58c8f5c53ebd129')
            .then((response) => response.json())
            .then((data) => {
                const genresList = data.genres.map(genre => ({
                    id: genre.id, value: genre.name, label: genre.name,

                }));
                // include transfering pages when clicked:
                // const genresList = data.genres.map(genre => ({
                //     value: genre.name, label: <Link href={genre.name}>{genre.name}</Link>
                //     // Another method, to send query in the path
                //     // <Link href={{
                //     //     pathname:"/Movies",
                //     //     query: {
                //     //         genreID: genre.id,
                //     //         genreName: genre.name
                //     //     }
                //     // }}>{genre.name}</Link>
                // }));
                setGenres(genresList);
            })  //set the data to our state variable
    },[])



    // with path:
    // const Moviesoptions=[
    //     {value: "top_rated", label:<Link href="/Movies/top_rated">Top Rate</Link>},
    //     {value: "populer", label:<Link href="/Movies/populer">Popular</Link>},
    //     {value: "latest", label:<Link href="/Movies/latest">Latest</Link>},
    //     {value: "now_playing", label:<Link href="/Movies/now_playing">Now playing</Link>},
    //     {value: "upcoming", label:<Link href="/Movies/upcoming">Upcoming</Link>},
    // ]
    
  return (
    //   Navbar - The Navbar should show up on all pages and contains the following:
    <nav className="w-full p-2 sm:px-4 grid grid-rows-2 grid-cols-[auto_auto] md:flex flex-wrap md:flex-nowrap items-center justify-between bg-black py-2 lg:flex-wrap lg:py-4">
        
        {/* Logo */}
        {/* <img src="" alt="logo"/> */}
        <Link href="/"><i className="fa-brands fa-playstation text-[30px] md:text-[40px] text-white hover:text-cyan-400"></i></Link>
        
        <div className="flex flex-nowrap md:gap-x-4 items-center justify-between">
            {/* Genres - This is a drop down that include the genres of all movies. The Genres should be fetched from the API. */}
            <Dropdwon name="Genres" options={genres} setValue={setGenresValue} setID={setGenresID}/>
            
            {/* Movies - This is another dropdown that contains the following options ["Top Rate", "Popular", "Latest", "Now playing", "Upcoming"] - Clicking on one of these options takes the user to the movies page (#2) and gives them the corresponding data. Each one of those has a dedicated API route. */}
            <Dropdwon name="Movies" options={Moviesoptions} setValue={setMoviesValue}/>
    
            {/* Actors - Goes to the Actors page (#4) and shows a list of all popular actors. */}
            <button className='hover:bg-gray-800 text-white rounded-lg py-2 px-6'><Link href="/actors">Actors</Link></button>
        </div>

            {/* Search Bar */}
        <div className='h-8 group relative col-span-2'>
            <div className='group-hover:block border-b-[1px] border-gray-400 focus-within:border-cyan-300 has-[:focus]:block w-full md:w-[200px] md:hidden absolute right-0'>
                <SearchDropdown setSearchValue={setMovieInfo} setSearchResults={setSearchResults} handleEnter={handleSearchEnter}/>
            </div>
            <div className='w-8 h-8 flex justify-center items-center rounded-full border group-hover:invisible group-focus-within:invisible invisible md:visible'>
            <i className="fa-solid fa-magnifying-glass text-white"></i>
            </div>
        </div>
    </nav>
  )
}

export default NavBar