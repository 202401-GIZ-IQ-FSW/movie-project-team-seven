import React, { Suspense } from "react"
import SectionSkeleton from "@/components/SectionSkeleton"
import MoviesSliderSection from "@/components/MoviesSliderSection"

export default function Movies() {
  const Moviesoptions=[
    {value: "top_rated", label:'Top Rate'},
    {value: "popular", label:'Popular'},
    {value: "now_playing", label:'Now playing'},
    {value: "upcoming", label:'Upcoming'},
  ]
  const sections = Moviesoptions.map((option)=> (<MoviesSliderSection key={option.value} option={option}/>))

  return (
  <div className='w-full font-serif'>
    <Suspense fallback={<SectionSkeleton/>}>
      {sections}
    </Suspense>
  </div>
    )
}
