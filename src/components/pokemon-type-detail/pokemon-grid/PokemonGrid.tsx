import React, { use } from 'react';
import { PokemonPopOver } from './popover/PokemonPopOver';
import { PokemonContext } from '../context/pokemon-context';
import { GridSkeleton } from '../../shared/GridSkeleton';
import {
  GENERAL_ERROR,
  EMPTY_ITEMS_INFO,
} from '@/constants/app.errors.constants';
import { Alert } from '@mantine/core';
import {
  IconExclamationCircleFilled,
  IconInfoCircleFilled,
} from '@tabler/icons-react';


export const PokemonGrid: React.FC = () => {
  const { queryResult, paginationResult } = use(PokemonContext);

 if (queryResult?.isError)
    return (
      <Alert color='pink' radius='xl' icon={<IconExclamationCircleFilled />}>
        {GENERAL_ERROR}
      </Alert>
    );

  if (queryResult?.isSuccess && paginationResult.pageItems.length === 0)
    return (
      <Alert color='yellow' radius='xl' icon={<IconInfoCircleFilled />}>
        {EMPTY_ITEMS_INFO}
      </Alert>
    );

  if (queryResult?.isSuccess)
    return (
      <div className='grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(3,170px)] lg:grid-cols-[repeat(5,170px)] gap-4 lg:gap-6 w-full'>
        {paginationResult.pageItems.length > 0 &&
          paginationResult.pageItems.map((item: any, index: number) => (
            <PokemonPopOver
              key={`pokemon_${index}`}
              name={item.name}
              url={item.url}
            />
          ))}
      </div>
    );

  return <GridSkeleton />;
};
