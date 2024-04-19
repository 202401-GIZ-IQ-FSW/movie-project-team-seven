"use client";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

export default function CustomSlider({Movies = []}) {

    const slides = Movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)

        const settings = {
          dots:true,
          speed: 1000,
          slidesToScroll: 4,
          variableWidth: true,
          vertical: false,
          responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToScroll: 3,
                initialSlide: 3
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
          ]
        }

      return (
      <div className="m-1 customSlider">
        <Slider {...settings}>
            {...slides}
        </Slider>
          </div>
      );
    }
