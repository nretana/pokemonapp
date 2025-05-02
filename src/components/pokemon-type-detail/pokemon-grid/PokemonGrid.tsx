import React from 'react';
import { usePokemonContext } from '../context/pokemon-context';
import { PokemonPopOver } from './popover/PokemonPopOver';
import { PokemonContext } from '../context/pokemon-context';
import { GridSkeleton } from '../../shared/GridSkeleton';
import { GENERAL_ERROR } from '@/constants/app.errors.constants';
import { Alert } from '@mantine/core';

export const PokemonGrid: React.FC = () => {
  const { queryResult, paginationResult } = usePokemonContext();

  return (
    <>
      {queryResult?.isError && <Alert color='red'>{GENERAL_ERROR}</Alert>}
      {queryResult?.isFetching ||
        queryResult?.isLoading ||
        (queryResult?.isSuccess && (
          <div className='grid grid-cols-[repeat(2,170px)] md:grid-cols-[repeat(3,170px)] lg:grid-cols-[repeat(5,170px)] gap-4'>
            {queryResult?.isFetching ||
              (queryResult?.isLoading && <GridSkeleton />)}
            {queryResult?.isSuccess &&
              paginationResult.pageItems.length > 0 &&
              paginationResult.pageItems.map((item: any, index: number) => (
                <PokemonPopOver
                  key={`pokemon_${index}`}
                  name={item.name}
                  url={item.url}
                />
              ))}
          </div>
        ))}
    </>
  );
};
