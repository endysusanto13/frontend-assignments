import * as React from "react";

import { useListingDetails } from "domains/movies";
import { NavBar } from 'domains/movies/components/navbar';
import { Button } from "components/button";
import { TextareaField } from "components/textarea-field";

import { StarIcon } from "@heroicons/react/solid"
import { Footer } from 'domains/movies/components/footer';

export const MovieDetails = () => {
  let listingId = "61600020ed0c83001e9159b4"

  const { data : movie } = useListingDetails(listingId);

  return(
    // CONTAINER - WHOLE PAGE
    <div className="container max-w-full mx-auto bg-indigo-100">
      
      {/* BODY SECTION */}
      <NavBar 
        onPageNav={false}
      />
      {movie && (
        <div className="container max-w-5xl mx-auto pt-24 pb-12"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {/* Most left column */}
            <div className="flex flex-col">
              <img src={movie.posterUrl} alt="" className=""/>
              <span className="w-full text-center font-bold bg-indigo-600 text-xl text-white py-2">
                {movie.title}
              </span>
              <span className="w-full text-center bg-indigo-400 text-base text-white py-2">
                Released Date: {movie.releaseDate} 
                {/* #TODO - Fix date format */}
              </span>
              <span className="flex flex-row w-full text-yellow-300 justify-center items-center">
                <StarIcon className="w-14 h-14" />
                <StarIcon className="w-14 h-14" />
                <StarIcon className="w-14 h-14" />
                <StarIcon className="w-14 h-14" />
                <StarIcon className="w-14 h-14" />
                <span className="text-black text-2xl font-bold pl-2">4.3/5</span>
              </span>
            </div>
            {/* 2nd and 3rd column */}
            <div className="col-span-2 z-0">
              <div className="relative">
                <img 
                  src={movie.backdropUrl} 
                  alt=""
                  className="rounded-md"
                />
                <div className="absolute inset-4 p-4 bg-opacity-90 bg-white rounded-md">
                  <table className="font-serif text-indigo-900 text-xs md:text-sm lg:text-lg">
                    <tr className="align-top">
                      <td className="w-1/4 font-bold pb-1">Movie Title:</td>
                      <td className="">{movie.title}</td>
                    </tr>
                    <tr className="align-top">
                      <td className="font-bold pb-1 ">Released Date:</td>
                      <td className="">{movie.releaseDate}</td>
                    </tr>
                    <tr className="align-top">
                      <td className="font-bold pb-1">Adult Content:</td>
                      <td>{!movie.adult ? "No" : "Yes"}</td>
                    </tr>
                    <tr className="align-top">
                      <td className="font-bold pb-1 ">Plot Overview:</td>
                      <td className="">{movie.overview}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="flex flex-col pt-8 space-y-4">
                <div className="flex flex-col space-y-2 bg-indigo-50 p-4 rounded-md">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-base font-bold pl-2">ndy13</span>
                    <span className="flex flex-row text-yellow-300 justify-center items-center">
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <span className="text-black text-lg font-bold pl-2 pr-2">4/5</span>
                    </span>
                  </div>
                  <TextareaField className="h-24"/>
                  <div className="flex flex-row justify-end pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="h-9 bg-indigo-400"
                      // disabled={status === "loading"}
                    >
                      Add Commment
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 bg-indigo-50 p-4 rounded-md">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-base font-bold pl-2">belong@94</span>
                    <span className="flex flex-row text-yellow-300 justify-center items-center">
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <span className="text-black text-lg font-bold pl-2 pr-2">4/5</span>
                    </span>
                  </div>
                  <span className="py-4 px-4 text-base bg-white rounded-md leading-tight">
                    Like the best of roller coaster rides, Avatar is invigorating and exhilarating, but like all roller coaster rides, that momentary thrill grows more faint the further into the past it recedes. Like the best of roller coaster rides, Avatar is invigorating and exhilarating, but like all roller coaster rides, that momentary thrill grows more faint the further into the past it recedes.
                  </span>
                </div>

                <div className="flex flex-col space-y-2 bg-indigo-50 p-4 rounded-md">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-base font-bold pl-2">ndy13</span>
                    <span className="flex flex-row text-yellow-300 justify-center items-center">
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <StarIcon className="w-8 h-8" />
                      <span className="text-black text-lg font-bold pl-2 pr-2">3/5</span>
                    </span>
                  </div>
                  <span className="py-4 px-4 text-base bg-white rounded-md leading-tight">
                    With ground breaking cinematography and an amazing score delivered by James Horner to match, Avatar promises to set the ball rolling for the way films will look in the next decade.
                  </span>
                  <div className="flex flex-row justify-end pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="h-9 bg-indigo-400"
                      // disabled={status === "loading"}
                    >
                      Delete Commment
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 bg-indigo-50 p-4 rounded-md">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-base font-bold pl-2">johnxz</span>
                    <span className="flex flex-row text-yellow-300 justify-center items-center">
                      <StarIcon className="w-8 h-8" />
                      <span className="text-black text-lg font-bold pl-2 pr-2">1/5</span>
                    </span>
                  </div>
                  <span className="py-4 px-4 text-base bg-white rounded-md leading-tight">
                    Avatar can hold your attention due to its visuals, but you'll find your mind drifting as what you assume is going to happen happens exactly as you thought it would.
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

