import React, { useEffect, useState } from 'react';
import {
  PokemonContext,
  pokemonInitState,
  GetPokemonTypeQueryHookResult,
  Filter,
  Pagination,
} from './context/pokemon-context';
import { useLocation, } from 'react-router-dom';
import { useGetPokemonTypeQuery } from '@/store/services/PokemonTypeService';
import { Pokemon } from '@/@types/pokemon';
import { PokemonGrid } from './pokemon-grid/PokemonGrid';
import { PokemonPagination } from './pokemon-pagination/PokemonPagination';
import { PokemonSearch } from './pokemon-search/PokemonSearch';

export type PokemonRootProps = {
  children: React.ReactNode;
};

export type PokemonRootComposition = {
  Grid: React.FC
  Pagination: React.FC
  Search: React.FC
};

export const PokemonGridRoot: React.FC<PokemonRootProps> &
  PokemonRootComposition = ({ children }) => {

  const location = useLocation();
  const typeId = location.state?.typeId;

  const queryResult = useGetPokemonTypeQuery(typeId) as GetPokemonTypeQueryHookResult;
  const [pagination, setPagination] = useState<Pagination>(pokemonInitState.pagination);
  const [filters, setFilters] = useState<Filter>(pokemonInitState.filters);
  const { currentPage, currentPageSize } = pagination;

  const onUpdateFilters = (key: keyof Filter, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setPagination(pokemonInitState.pagination);
  }

  const onUpdatePagination = (key: keyof Pagination, value: unknown) => {
    setPagination(prev => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    if(!queryResult.data) return;
    let pokemonList = queryResult.data?.pokemonItems as Omit<Pokemon, 'id' | 'imageUrl'>[];
    if(filters.searchText.trim().length > 0){
      pokemonList = pokemonList.filter(item => item.name.includes(filters.searchText));
    }
    const pageItems = pokemonList.slice((currentPage - 1) * currentPageSize, currentPageSize * currentPage);
    const numPages = Math.ceil(pokemonList.length / currentPageSize);
    setPagination(prev => ({ ...prev, pageItems: pageItems, numPages}));

  }, [queryResult.isSuccess, currentPage, filters]);

  return (
    <PokemonContext.Provider
      value={{
        queryResult,
        pagination,
        setPagination: onUpdatePagination,
        filters,
        setFilters: onUpdateFilters
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonGridRoot.Grid = PokemonGrid;
PokemonGridRoot.Pagination = PokemonPagination;
PokemonGridRoot.Search = PokemonSearch;
