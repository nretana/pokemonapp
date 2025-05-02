import React, { useEffect, useState } from 'react';
import {
  PokemonContext,
  PokemonInitState,
  Pagination,
  GetPokemonTypeQueryHookResult,
  PaginationResult,
} from './context/pokemon-context';
import { useLocation, } from 'react-router-dom';
import { useGetPokemonTypeQuery } from '@/store/services/PokemonTypeService';
import { Pokemon } from '@/@types/pokemon';
import { PokemonGrid } from './pokemon-grid/PokemonGrid';
import { PokemonPagination } from './pokemon-pagination/PokemonPagination';

export type PokemonRootProps = {
  children: React.ReactNode;
};

export type PokemonRootComposition = {
  Grid: React.FC;
  Pagination: React.FC;
};

export const PokemonGridRoot: React.FC<PokemonRootProps> &
  PokemonRootComposition = ({ children }) => {
  const location = useLocation();
  const typeId = location.state?.typeId;

  const queryResult = useGetPokemonTypeQuery(typeId) as GetPokemonTypeQueryHookResult;
  const [currentPage, setCurrentPage] = useState<number>(PokemonInitState.currentPage);
  const [paginationResult, setPaginationResult] = useState<PaginationResult>(PokemonInitState.paginationResult);
  const currentPageSize = PokemonInitState.currentPageSize;


  useEffect(() => {
    if(!queryResult.data) return;
    const pokemonList = queryResult.data?.pokemonItems as Omit<Pokemon, 'id' | 'imageUrl'>[];
    const pageItems = pokemonList.slice((currentPage - 1) * currentPageSize, currentPageSize * currentPage);
    const numPages = Math.ceil(pokemonList.length / currentPageSize);
    setPaginationResult({ pageItems: pageItems, numPages });
  }, [queryResult.isSuccess, currentPage]);

  return (
    <PokemonContext.Provider
      value={{
        queryResult,
        currentPage,
        currentPageSize: PokemonInitState.currentPageSize,
        setCurrentPage,
        paginationResult
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonGridRoot.Grid = PokemonGrid;
PokemonGridRoot.Pagination = PokemonPagination;
