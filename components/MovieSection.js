import MovieCard from './MovieCard';


export default async function MovieSection({option , query}) {
  const genreData = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${option}&api_key=ba21689db16b6c3bc58c8f5c53ebd129`;
  const movieTypeData = `https://api.themoviedb.org/3/movie/${option}?api_key=ba21689db16b6c3bc58c8f5c53ebd129`;
  const searchQuery = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129&query=${query}`
  const trendingData =`https://api.themoviedb.org/3/trending/movie/day?api_key=ba21689db16b6c3bc58c8f5c53ebd129`;
  
  // see if the option is an id of genre (number) or movie type (string), then use it to fetch, else use the query to fetch, else use trending
  let url;
  if(option){
    url = isNaN(option)? movieTypeData : genreData;
  } else {
    url = query? searchQuery : trendingData;
  }
  
  const movies = await fetch(url)
      .then(res =>  res.json())
      .then(data => (data.results.filter(movie => movie.adult === false)))

  const cards = movies.map( movie => (<MovieCard key={movie.id} movie={movie}/>))

  return (
    <div>
      <p className="text-center text-[24px] font-serif border-b border-cyan-900 m-4 text-cyan-500">{query? "Search Result" : option ? "Your Choice" : "Trending"}</p>
      <div className="m-[16px] flex flex-wrap justify-center items-center gap-3">
        {cards}
      </div> 
    </div>
  )
}
