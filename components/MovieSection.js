"use client";
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { cardPlaceholder } from '@/app/page';


export default function MovieSection({option , query}) {
  const genreData = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${option}&api_key=ba21689db16b6c3bc58c8f5c53ebd129`;
  const movieTypeData = `https://api.themoviedb.org/3/movie/${option}?api_key=ba21689db16b6c3bc58c8f5c53ebd129`;
  const trendingData =`https://api.themoviedb.org/3/trending/movie/day?api_key=ba21689db16b6c3bc58c8f5c53ebd129`;
  const searchQuery = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129&query=${query}`
  
  // see if the parameter is a id of genre (number) or type name (string), then use it to fetch
  let url;
  if(option){
    url = isNaN(option)? movieTypeData : genreData;
  } else {
    url = query? searchQuery : trendingData ;
  }
  
    const [movies, setMovies] = useState([])
    useEffect( () => {

      fetch(url)
      .then(res =>  res.json())
      .then(data => {
        setMovies(data.results)
    })
    } , [] )

    let cards =[];
    const isPlaceholder = (movies.length > 0)?  false : true;

    if(isPlaceholder){
        for(let  i = 0 ; i < 21 ; i++){
            cards.push(<Card key={i} movie={cardPlaceholder[0]} isPlaceholder={isPlaceholder}/>)
        }
    }else{
     cards = movies.map( movie => (<Card key={movie.id} movie={movie}/>))
    }

      return (
        <div>
          <div className="w-full p-2 border-b-2 border-gray-500 text-center">
            <p className="text-cyan-400 text-[24px] font-serif">{query? "Search Result" : option ? "Your Choice" : "Trending"}</p>
          </div>
          <div className="w-fit m-[16px] flex flex-wrap justify-center items-center gap-6">
            {cards}
          </div> 
        </div>
      )
}
