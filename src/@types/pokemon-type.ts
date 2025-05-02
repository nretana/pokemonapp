import { Pokemon } from './pokemon'

export type PokemonTypeDetail = {
    id: number
    name: string
    pokemonItems: Omit<Pokemon, 'id' | 'imageUrl'>[]
}

export type PokemonType = {
    id: number
    name: string
    url: string,
    pokemon: Omit<Pokemon, 'id' | 'imageUrl'>[]
}

export type PokemonTypeWithPagination = {
    count: number,
    next: string | null,
    previous: string | null
    results: Omit<PokemonType, 'id' | 'pokemon'>[]
}

export type PokemonTypeQueryParams = {
    offset: number
    limit: number
}

