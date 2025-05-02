import React, { use } from 'react';
import { PokemonPopOver } from './popover/PokemonPopOver';
import { PokemonContext } from '../context/pokemon-context';
import { GridSkeleton } from '../../shared/GridSkeleton';
import { EMPTY_ITEMS_INFO } from '@/constants/app.errors.constants';
import { Alert } from '@mantine/core';
import { IconInfoCircleFilled } from '@tabler/icons-react';
import { GeneralErrorAlert } from '@/components/shared/GeneralErrorAlert';


export const PokemonGrid: React.FC = () => {
  const { queryResult, pagination } = use(PokemonContext);
  const { pageItems } = pagination;

 if (queryResult?.isError)
    return (<GeneralErrorAlert />);

  if (queryResult?.isSuccess && pageItems.length === 0)
    return (
      <Alert color='yellow' radius='xl' icon={<IconInfoCircleFilled />}>
        {EMPTY_ITEMS_INFO}
      </Alert>
    );

  if (queryResult?.isSuccess)
    return (
      <div className='grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,170px)] md:grid-cols-[repeat(3,170px)] lg:grid-cols-[repeat(5,170px)] gap-4 lg:gap-6 w-full'>
        {pageItems.length > 0 &&
          pageItems.map((item: any, index: number) => (
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
