"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

export default function CustomSlider({Movies = []}) {

    const slides = Movies.map((movie)=>{
      const isPlaceholder = (movie.id === "placeholder")? true : false;
      const imagePath = "https://image.tmdb.org/t/p/original"
      const poster = isPlaceholder? movie.poster_path : (imagePath + movie.poster_path);
        return( 
        <div key={movie.id}>
          <Link href={(isPlaceholder)? "#" : "./movies/" + movie.id } >
            <div className="group relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] mx-[9px] w-[calc(100%-10px)] text-black text-[12px] flex justify-center items-end hover:items-center gap-8 md:hover:bg-[rgb(27,27,27,0.5)] hover:border border-cyan-400">
              <img src={poster} alt="poster" className="group-hover:blur-sm z-[-1] absolute top-0 w-full h-full"/>
              <div className="min-h-[50%] p-2 flex justify-center items-center text-center w-full group-hover:h-full bg-[rgb(27,27,27,0.65)]">
                <p className="text-[12px] md:text-[20px] text-cyan-400 font-serif">{movie.title}</p>
              </div>
            </div>
          </Link>
        </div>
      )})
    
        const settings = {
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical: false,
        }

      return (
      <div className="w-5/6 m-auto">
        <Slider {...settings}>
            {slides}
        </Slider>
          </div>
      );
    }
