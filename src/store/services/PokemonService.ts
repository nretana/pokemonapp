import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon, PokemonWithPagination } from '@/@types/pokemon';
import { BASE_API_URL } from '@/constants/app.constant';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { getLastSegmentPath } from '@/utils/getLastSegmentPath';


export const PokemonService = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}`,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonWithPagination, {}>({
      query: (params) => {
        return { url: '/pokemon', method: 'GET', params };
      },
      transformResponse: (response: any, meta: any) => {
        return response;
      },
    }),
    getPokemon: builder.query<Pokemon, { pokemonId: number }>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const pokemonResult = await fetchWithBQ(`pokemon/${_arg.pokemonId}`)
        if (pokemonResult.error){
          return { error: pokemonResult.error as FetchBaseQueryError }
        }

        const currentPokemon = pokemonResult.data as any;
        const abilityPromises = currentPokemon.abilities.map(async(ability: any) => {
          const abilityId = getLastSegmentPath(ability.ability.url);
          const abilityResult = await fetchWithBQ(`/ability/${abilityId}`) as any;

          if (pokemonResult.error){
            return { error: abilityResult.error as FetchBaseQueryError }
          }
          
          const abilityItem = abilityResult.data as any;
          const abilityDetails = {
            id: abilityItem.id,
            name: abilityItem.name,
            effect: abilityItem?.['effect_entries'].find((item: any) => item.language.name === 'en')?.['short_effect']
          };
          return abilityDetails;
        }); 

        const abilityItems = await Promise.all(abilityPromises);
        const pokemon = {
          id: currentPokemon?.id,
          name: currentPokemon?.name,
          imageUrl: currentPokemon.sprites.other?.['dream_world']?.['front_default'],
          abilities: abilityItems
        };

        return { data: pokemon as Pokemon }
      },
    })
  })
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = PokemonService;
