import { useQuery } from "react-query";
import {fetchData}  from '@services/MovieDatabase'

export const useMovieFetch = (searchQuery: string) =>
  useQuery(["movies", searchQuery], () => fetchData(searchQuery), {
    keepPreviousData: true,
  });