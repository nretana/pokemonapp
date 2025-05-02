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
}

export type PaginationResult = {
    pageItems:  Omit<Pokemon, 'id' | 'imageUrl'>[],
    numPages: number
}

export type PokemonContextState = {
    queryResult?: GetPokemonTypeQueryHookResult
    currentPage: number,
    currentPageSize: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    paginationResult: PaginationResult
}

export const PokemonInitState: PokemonContextState = {
    currentPage: 1,
    currentPageSize: 20,
    setCurrentPage: () => {},
    paginationResult: {
        pageItems: [],
        numPages: 0
    }
}

export const PokemonContext = createContext(PokemonInitState);
export const usePokemonContext = () => useContext(PokemonContext);