"use client";
import { useState, useEffect } from 'react';
import ActorCard from '@/components/ActorCard';

const API_URL = 'https://api.themoviedb.org/3/trending/person/week?language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129';

const ActorsPage = () => {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setActors(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchActors();
  }, []);

  return (
    <div className="container  mx-auto p-4 text-center font-serif">
      <h1 className="text-3xl font-bold mb-4 py-4 text-cyan-400 border-b border-cyan-900">Trending Actors</h1>
      <div className="flex flex-wrap justify-center gap-4">
          <ActorCard actors={actors}/>
      </div>
    </div>
  );
};

export default ActorsPage;