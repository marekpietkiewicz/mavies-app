import axios from "axios";

export type MovieType = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
type PaginatedFetch = (searchQuery: string) => Promise<MovieType>;

const api = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const fetchData: PaginatedFetch = async (searchQuery = "") => {
  const { data } = await api.get(
    `/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=${encodeURI(
      searchQuery
    )}`
  );
  return data;
};
