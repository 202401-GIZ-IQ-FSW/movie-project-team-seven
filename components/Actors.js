import ActorCard from '@/components/ActorCard';
import Link from 'next/link';

const API_URL = 'https://api.themoviedb.org/3/trending/person/week?language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129';

export default async function Actors() {


    const fetchActors = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const actors = await fetchActors();
    const actorCards = actors.map(actor => (
        <Link href={`/actors/${actor.id}`} key={actor.id}>
            <ActorCard actor={actor}/>
      </Link>))
      
  return (
    <div className="mx-auto p-4 text-center font-serif">
      <p className="text-[24px] font-serif border-b border-cyan-900 m-4 text-cyan-500">Trending Actors</p>
      <div className="flex flex-wrap justify-center gap-4">
      {actorCards}
      </div>
    </div>
  );
};
