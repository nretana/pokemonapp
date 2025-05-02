import { Pokemon } from '@/@types/pokemon';
import { createContext, useContext } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { PokemonTypeDetail } from '@/@types/pokemon-type';
import { Pagination } from '@mantine/core';


export type GetPokemonTypeQueryHookResult = {
    data: PokemonTypeDetail | undefined;
    error: FetchBaseQueryError | SerializedError | undefined;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    isUninitialized: boolean;
    isFetching: boolean;
    refetch: () => void;
};

export type Pagination = {
    currentPage: number,
    currentPageSize: number
    pageItems:  Omit<Pokemon, 'id' | 'imageUrl'>[],
    numPages: number
}

export type Filter = {
    searchText : string
}

export type PokemonContextState = {
    queryResult?: GetPokemonTypeQueryHookResult
    pagination: Pagination
    setPagination: (key: keyof Pagination, value: unknown) => void
    filters: Filter
    setFilters: (key: keyof Filter, value: string) => void
}

export const pokemonInitState: PokemonContextState = {
    pagination: {
        currentPage: 1,
        currentPageSize: 20,
        pageItems: [],
        numPages: 0
    },
    setPagination: () => {},
    filters: {
        searchText: ''
    },
    setFilters: () =>  {}
}

export const PokemonContext = createContext(pokemonInitState);
export const usePokemonContext = () => useContext(PokemonContext);