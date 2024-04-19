"use client";
import Slider from "react-slick";
import Link from 'next/link';
import Image from "next/image";
import TrailerButton from "./TrailerButton";

export default function MainSlider({movies}) {

  const slides = movies.map(movie=>{
      const imagePath = "https://image.tmdb.org/t/p/original"
      const poster = imagePath + movie.poster_path;
      const backdrop = imagePath + movie.backdrop_path;
      const releaseDate = movie.release_date.slice(0,4);
      const rate = (Math.round((movie.vote_average + Number.EPSILON) * 10) / 10);

        return( 
        <div key={movie.id} className="group relative w-full max-h-[500px] text-[12px] overflow-hidden">
            <Image 
            quality={100}
            unoptimized={true}
            // priority={true}
            // loading='eager'
            src={backdrop} width={"100"} height={"100"} alt="" 
            className="group-hover:blur-sm sm:blur-sm z-[-1] w-full h-full"/>
          <div className="absolute bottom-0 w-full max-sm:group-hover:h-full sm:h-full flex items-center justify-center gap-8 bg-[rgb(27,27,27,0.3)] p-2">
            <div className="relative max-sm:hidden w-[200px] h-[300px] overflow-hidden">
            <p className='absolute top-[-10px] right-[-31px] text-white text-[12px] m-1 pt-4 pb-1 px-6 bg-black rotate-45'><i className="fa-solid fa-star text-yellow-500 text-[12px]"></i> {rate}</p>
              <Image
              quality={100}
              unoptimized={true}
              // priority={true}
              className='border w-full h-full' 
              width={"200"} height={"300"} src ={poster} alt={movie.title}/>
            </div>
            <div className="w-full sm:max-w-56 sm:h-[300px]">
              <div className="h-full flex flex-col justify-center sm:justify-between items-center text-center">
                <p className="text-[16px] sm:text-[24px] text-cyan-400 font-serif">
                  {movie.title}
                  <span className="max-sm:hidden block text-gray-400 text-sm">{releaseDate}</span>
                </p>
                <p className="max-sm:hidden text-white line-clamp-6">{movie.overview}</p>
                <div className='max-sm:hidden max-sm:group-hover:flex flex justify-center gap-2 my-4 text-[12px]'>
                  <Link href={"./movies/"+ movie.id}><button className="bg-black border hover:border-cyan-400 text-white rounded-md p-2 ">More Details</button></Link>
                  <TrailerButton id={movie.id}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    
        const settings = {
          dots: true,
          fade: true,
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
          speed: 1500,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 640,
              settings: {
                dots: false,
              }
            },
          ]
        };
    
      return (
      <div className="w-full m-1 mainSlider">
        <Slider {...settings}>
            {slides}
        </Slider>
      </div>
      );
    }
