import * as React from "react";

import { useListings } from "domains/movies";
import { NavBar } from 'domains/movies/components/navbar';
import { Footer } from 'domains/movies/components/footer';

export const Movies = () => {
  const { data: listings, page, setPage } = useListings();

  return(
    // CONTAINER - WHOLE PAGE
    <div className="container max-w-full mx-auto bg-indigo-100">
      <NavBar 
        onPageNav={true}
      />
      {/* BODY SECTION */}
      <div className="container max-w-4xl mx-auto pt-24 pb-12"> 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
          {listings &&
            listings.map((movie) => (
                <div className="flex flex-col justify-between">
                  <img 
                    src={movie.posterUrl} 
                    alt=""
                    className=""
                  />
                  <span className="flex-grow bg-indigo-600"></span>
                  {/* Tailwind line-clamp do not allow center vertical alignment */}
                  <span
                    className="flex text-center font-bold bg-indigo-600 text-white line-clamp-2 py-1"
                  >
                    {movie.title}

                  </span>
                  <span className="flex-grow bg-indigo-600"></span>
                  <span 
                    className="flex-grow font-light text-sm text-justify line-clamp-4 text-indigo-900 leading-4"
                  >
                    {movie.overview}
                  </span>
                </div>
          ))}
                {/* #TODO add key prop */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

