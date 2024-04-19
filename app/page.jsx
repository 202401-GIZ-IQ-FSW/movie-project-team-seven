import React, { Suspense } from "react";
import SectionSkeleton from "@/components/SectionSkeleton";
import MainSliderSection from "@/components/MainSliderSection";
import Movies from "./movies/page";


export default function Home() {
 
    return(
      <div className="w-full flex flex-col justify-center items-center gap-4 font-serif">
        <Suspense fallback= {<SectionSkeleton />}>
          <MainSliderSection/>
          <Movies/>
        </Suspense>
      </div>
    )
}
