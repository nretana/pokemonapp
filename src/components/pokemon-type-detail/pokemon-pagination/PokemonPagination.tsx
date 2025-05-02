import { use } from 'react';
import { Pagination } from '@mantine/core';
import { PokemonContext } from '../context/pokemon-context';
import { Skeleton } from '@mantine/core';


export const PokemonPagination = () => {
  const { queryResult, pagination, setPagination } = use(PokemonContext);

  const prevPage = () => {
    setPagination('currentPage', pagination.currentPage - 1);
  };

  const nextPage = () => {
    setPagination('currentPage', pagination.currentPage + 1);
  };

  if (queryResult?.isSuccess)
    return (
      <div className='flex justify-center mt-4 lg:mt-6'>
        <Pagination
          size='lg'
          total={pagination.numPages}
          defaultValue={pagination.currentPage}
          onPreviousPage={prevPage}
          onNextPage={nextPage}
          value={pagination.currentPage}
          onChange={(value) => setPagination('currentPage', value)}
        />
      </div>
    );

  return <div className='mt-4 lg:mt-6'> <Skeleton height={40} /> </div>;
};
