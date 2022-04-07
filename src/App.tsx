import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import { Movie, Actor } from "./types";
import { api, tmdb } from "./api";
import ActorCard from "./components/ActorCard";

function App() {
  const [movies, setMovies] = useState<Movie[]>();
  const [current, setCurrent] = useState<number | null>(null);

  const [actors, setActors] = useState<Actor[]>();
  // const [showActors, setShowActors] = useState<number | null>(null); no movieID field at actors.json

  useEffect(() => {
    fetchMovies();
    fetchActors();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await api.get("/movies.json");
      setMovies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchActors = async () => {
    try {
      let lst: Actor[] = [];
      const res = await api.get("/actors.json");
      console.log(res.data.slice(20));

      // for (let index = 0; index < res.data.length; index++) {
      //   const element = res.data[index];
      //   if (await checkIsValid(element)) {
      //     lst.push(element);
      //   }
      // }

      setActors(shuffle(res.data).slice(0, 50));
    } catch (err) {
      console.log(err);
    }
  };

  const shuffle = (array: []) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  // const checkIsValid = async (image_path: string) => {
  //   const res = await tmdb.get(image_path);
  //   if (res.data) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <div>
      <header
        id="top"
        className="px-4 py-6 flex flex-row border-0 border-b-1 border-gray-100"
      >
        <p>🌸 Orchids</p>
      </header>
      <main className="flex-column justify-center">
        <div className="w-100%">
          {current && movies ? (
            <iframe
              className="border-0"
              width="100%"
              height="315"
              src={
                "https://www.youtube.com/embed/" +
                String(
                  movies
                    .filter((i) => i.id == current)[0]
                    .trailer.split("watch?v=")
                    .slice(-1)
                )
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ) : (
            ""
          )}
        </div>
        <div className="pa-2 flex flex-row flex-wrap justify-around">
          {movies?.map((item) => {
            return (
              <MovieCard setCurrent={setCurrent} key={item.id} movie={item} />
            );
          })}
        </div>
        <h3 className="text-center text-lg bg-orange-200">Actors</h3>

        <div className="pa-2 flex flex-row flex-wrap justify-around">
          {actors?.map((item) => {
            return <ActorCard key={item.name} actor={item} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
