import React, { useEffect } from 'react';
import { useGetPokemonTypesQuery } from '@/store/services/PokemonTypeService';
import { Box, Button, Alert } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { getLastSegmentPath } from '@/utils/getLastSegmentPath';
import { LoadingContent } from '../shared/LoadingContent';
import { GENERAL_ERROR } from '@/constants/app.errors.constants';
import { GridSkeleton } from '../shared/GridSkeleton';

export const PokemonTypeList = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetPokemonTypesQuery({});

  const handleClick = (name: string, typeId: number) =>
    navigate(`/types/${name}`, { state: { typeId } });

  return (
    <>
      {isError && <Alert color='red'>{GENERAL_ERROR}</Alert>}
      {isFetching || isLoading || isSuccess && 
      <div className='grid grid-cols-[repeat(2,170px)] md:grid-cols-[repeat(3,170px)] lg:grid-cols-[repeat(5,170px)] gap-6'>
        {(isFetching || isLoading) && <GridSkeleton />}
        {isSuccess &&
          data?.results &&
          data?.results.length > 0 &&
          data?.results.map((item, index) => {
            const typeId = parseInt(getLastSegmentPath(item.url));
            return (
              <Button
                key={`pokemon_type_${index}`}
                className='w-full'
                size='xl'
                variant='gradient'
                w={170}
                onClick={() => handleClick(item.name, typeId)}
              >
                <span className='capitalize truncate ...'>{item.name}</span>
              </Button>
            );
          })}
      </div>}
    </>
  );
};
