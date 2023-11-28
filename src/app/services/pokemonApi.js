import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://my-json-server.typicode.com/ozcanzaferayan/pokedex";
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => "/pokemons",
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
