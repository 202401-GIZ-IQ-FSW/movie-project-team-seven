"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function MainSlider({Movies=[]}) {

  const router = useRouter();
  async function getTrailer(id){
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
      .then((res)=> res.json())
      .then((data) => {
        router.push(`https://www.youtube.com/watch?v=${data.results[0].key}`)
      })
  }

  const slides = Movies.map(movie=>{
    const isPlaceholder = (movie.id === "placeholder")? true : false;
      const imagePath = "https://image.tmdb.org/t/p/original"
      const poster = isPlaceholder? movie.poster_path : (imagePath + movie.poster_path);
      const backdrop = isPlaceholder? movie.backdrop_path : (imagePath + movie.backdrop_path);
        return( 
        <div key={movie.id}>
          <div className="group relative h-[25vh] sm:h-[60vh] md:h-[85vh] w-full text-black text-[12px] flex items-end justify-center sm:items-center gap-8 sm:bg-[rgb(27,27,27,0.2)] hover:bg-[rgb(27,27,27,0.65)] border border-transparent hover:border-cyan-400 ">
            <img src={backdrop} alt="" className="group-hover:blur-sm sm:blur-sm z-[-1] absolute w-full h-full"/>
            <div className="max-sm:hidden w-[200px]">
              <img className='border' src ={poster} alt={movie.title}/>
            </div>
            <div className="max-sm:bg-[rgb(27,27,27,0.65)] max-sm:min-h-[25%] p-2 flex flex-col justify-center items-center group-hover:h-full text-center max-sm:w-full max-sm:flex sm:max-w-56">
              <p className="text-[16px] md:text-[24px] text-cyan-400 font-serif">{movie.title}</p>
              <p className="max-sm:hidden text-white ">{movie.overview}</p>
              <div className='w-full flex justify-center md:justify-between my-4 text-[12px]'>
              <Link href={(isPlaceholder)? "#" : "./movies/"+ movie.id}><button className="max-sm:hidden group-hover:block bg-black hover:bg-gray-500 border border-transparent group-hover:border-white focus:border-cyan-400 hover:border-cyan-300 text-white rounded-md p-2 ">More Details</button></Link>
              <button onClick={() => getTrailer(movie.id)} className="max-sm:hidden sm:group-hover:block bg-red-700 hover:bg-red-500 border border-transparent group-hover:border-white focus:border-cyan-400 text-white rounded-md p-2 ">Watch Trailer</button>
              </div>
            </div>
          </div>
        </div>
      )
    })
    
        const settings = {
          infinite: true,
          fade: true,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear",
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: true,
        };
    
      return (
      <div className="w-5/6 m-auto">
        <Slider {...settings}>
            {slides}
        </Slider>
      </div>
      );
    }
