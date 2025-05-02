import { Ability } from './pokemon-ability';

export type Pokemon = {
  id: number
  name: string
  url: string
  imageUrl: string
  abilities: Ability[]
};


export type PokemonWithPagination = {
  count: number
  next: string | null
  previous: string | null
  results: Omit<Pokemon, 'id' | 'imageUrl'>[]
};

export type PokemonQueryParams = {
    offset: number
    limit: number
}
