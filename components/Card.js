import React from 'react'

export default function Card({name, image}) {
  return (
    <div className='group relative w-[200px] h-[300px]'>
      <img className='w-full h-full absolute z-[-1]' src={"https://image.tmdb.org/t/p/original/"+ image}/>
      <div className='invisible group-hover:visible w-full h-full bg-[rgb(27,27,27,0.5)]'>
        <p className='text-cyan-300 pl-3 text-[20px]'>{name}</p>
      </div>
    </div>
  )
}
