import React from "react";
import { Movie } from "../types";

type Props = {
  movie: Movie;
  setCurrent: (value: number) => void;
};

const MovieCard: React.FC<Props> = ({ movie, setCurrent }) => {
  return (
    <div className="lg:ma-2 md:ma-2 border-1 border-gray-100 rounded-md max-w-100 sm:mx-auto sm:my-2">
      <p className="font-semibold py-1 text-center">{movie.title}</p>
      <img className="max-w-100%" src={movie.image} alt={movie.title} />
      <div className="px-2 pb-2">
        <p>{movie.description}</p>
        <p>
          Duration: <span className="text-orange-400">{movie.duration}</span>{" "}
          mins
        </p>
        <a
          href="#top"
          onClick={(e) => setCurrent(movie.id)}
          className="bg-blue-400 text-white no-underline border-1 border-white px-4 py-2 block rounded-md hover:border-blue-200 hover:bg-white hover:text-blue-400 max-w-fit ml-auto"
        >
          Watch trailer
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
