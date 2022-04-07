import React from "react";
import { Actor } from "../types";

type Props = {
  actor: Actor;
};

const ActorCard: React.FC<Props> = ({ actor }) => {
  return (
    <div className="lg:ma-2 md:ma-2 border-1 border-gray-100 rounded-md max-w-25 h-min sm:mx-auto sm:my-2">
      <p className="font-semibold py-1 text-center">{actor.name}</p>
      <img
        className="max-w-100%"
        src={"https://image.tmdb.org/t/p/original" + actor.image_path}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://cdns-images.dzcdn.net/images/cover/db79caabdd92bf657873e94a4d827303/500x500.jpg";
        }}
        alt={actor.name}
      />
    </div>
  );
};

export default ActorCard;
