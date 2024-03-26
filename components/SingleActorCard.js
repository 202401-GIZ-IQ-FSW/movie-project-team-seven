import React from 'react'
import Image from 'next/image'
export default function SingleActorCard() {

    const actor = {
        adult: false,
        also_known_as: [
            "Carrie Anne Moss",
            "Carrie-Ann Moss",
            "Carrie Ann Moss",
            "Кэрри-Энн Мосс",
            "Κάρι-Αν Μος",
            "凯莉·安妮·莫斯",
            "凱莉-安·摩絲",
            "Керрі-Енн Мосс",
            "Керрі Енн Мосс"
        ],
        biography: "Carrie-Anne Moss (born August 21, 1967) is a Canadian actress. After early roles on television, she rose to international prominence for her role of Trinity in The Matrix franchise. She has starred in Memento (2000) for which she won the Independent Spirit Award for Best Supporting Female, Red Planet (2000), Chocolat (2000), Fido (2006), Snow Cake (2006) for which she won the Genie Award for Best Performance by an Actress in a Supporting Role, Disturbia (2007), Unthinkable (2010), Silent Hill: Revelation (2012), and Pompeii (2014). She also portrayed Jeri Hogarth in several television series produced by Marvel Television for Netflix, most notably Jessica Jones (2015–2019).",
        birthday: "1967-08-21",
        deathday: null,
        gender: 1,
        homepage: "http://annapurnaliving.com",
        id: 530,
        imdb_id: "nm0005251",
        known_for_department: "Acting",
        name: "Carrie-Anne Moss",
        place_of_birth: "Burnaby, British Columbia, Canada",
        popularity: 28.121,
        profile_path: "/xD4jTA3KmVp5Rq3aHcymL9DUGjD.jpg"
    }
  return (
        <div className='w-full flex justify-center items-center flex-col sm:flex-row'>

                <div className='w-[95%] m-[2.5%] sm:w-[250px]'>
                            <img
                                src='https://image.tmdb.org/t/p/original/xD4jTA3KmVp5Rq3aHcymL9DUGjD.jpg'
                                alt='Actor Image'
                                className='w-full h-full'
                                id='actorImage'
                            />
                </div>

                <div className='max-w-[60%] mx-auto flex flex-col gap-4 place-items-center'>
                    <a href='{}'><h3 class="text-3xl md:text-3xl lg:text-6xl px-8 lg:mt-8">{actor.name}</h3></a> {/* Make the name clickable */}
                    <h4 className='text-[15px] md:text-2xl lg:text-[20px] '>Birthday: {actor.birthday}</h4>  {/* Birth Day */}
                    <p class="text-[12px] leading-loose lg:text-base lg:leading-relaxed">Biography: {actor.biography}</p> {/* Biography */}
                    <div className='md:text-[12px]'>
                        <p>Place of birth: {actor.place_of_birth}</p>
                        <p>Deathday: {actor.deathday}</p>
                        <p>Gender: {actor.gender}</p>
                        <p>Popularity: {actor.popularity}</p>
                    </div>
                </div>
        </div>
  )
}