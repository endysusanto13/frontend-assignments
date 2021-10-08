import * as React from "react";
import { Link } from "react-router-dom";

import { FilmIcon, UserCircleIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/outline"
import { NumberLabel } from "components/number-label";

// #TODO DELETE all below
// let status = "authenticated"
let status = "anonymous"
let username = "ndy13"

export const NavBar = (props) => {
  return(
    <div className="fixed grid grid-cols-3 justify-items-stretch h-12 w-full bg-indigo-700 z-50">
      <div className="flex flex-row items-center justify-start">
        <FilmIcon className="w-12 h-6 text-white pl-4"/> 
        <span className="text-white font-sans text-2xl font-semibold tracking-wider pl-2 pb-1">MOVIES</span>
      </div>
      {props.onPageNav && (
        <div className="flex flex-row items-center justify-center space-x-4">
          <ArrowCircleLeftIcon className="w-8 h-8 text-white"/>
          <NumberLabel
            type=""
            variant="primary"
            className="w-1/12 text-base"
          >
            89
          </NumberLabel>
          <ArrowCircleRightIcon className="w-8 h-8 text-white"/>
        </div>
      )}

      <div className="col-start-3 flex flex-row items-center justify-end">
        <span className="text-white font-sans text-lg font-semibold tracking-wider pr-4">
          {status === "authenticated" ? (
            <Link to={`/login`}>Sign In</Link>
          ) : (
            <div className="flex flex-row items-center justify-end">
              <UserCircleIcon className="w-12 h-6 text-white pl-4" />
              <span>{username}</span>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};