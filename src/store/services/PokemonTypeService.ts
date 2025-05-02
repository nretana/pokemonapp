import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { queryStringParams } from '@/utils/queryStringParams';
import { axiosBaseQuery } from './AxiosBaseQuery';
import { BASE_API_URL } from '@/constants/app.constant';
import type {
  PokemonType,
  PokemonTypeWithPagination,
  PokemonTypeQueryParams,
  PokemonTypeDetail,
} from '@/@types/pokemon-type';

export const PokemonTypeService = createApi({
  reducerPath: 'pokemonTypeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}`,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPokemonTypes: builder.query<PokemonTypeWithPagination, {}>({
      query: (params) => {
        return { url: '/type', method: 'GET', params };
      },
      transformResponse: (response: any, meta: any) => {
        const items = response?.results.filter(
          (item: any) => item.name !== 'unknown'
        );
        return { ...response, results: items };
      },
    }),
    getPokemonType: builder.query<PokemonTypeDetail, number>({
      query: (typeId) => {
        return { url: `/type/${typeId}`, method: 'GET' };
      },
      transformResponse: (response: any, meta: any) => {
        const result = response.pokemon.map((pok: any) => ({
          name: pok.pokemon.name,
          url: pok.pokemon.url
        }));
        return {
          id: response.id,
          name: response.name,
          pokemonItems: [...result],
        };
      },
    }),
  }),
});

export const { useGetPokemonTypesQuery, useGetPokemonTypeQuery } =
  PokemonTypeService;
