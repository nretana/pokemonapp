import { use } from 'react';
import { Pagination } from '@mantine/core';
import { PokemonContext } from '../context/pokemon-context';
import { Skeleton } from '@mantine/core';

export const PokemonPagination = () => {
  const { queryResult, paginationResult, currentPage, setCurrentPage } =
    use(PokemonContext);
  const { numPages } = paginationResult;

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  if (queryResult?.isSuccess)
    return (
      <div className='flex justify-center mt-4 lg:mt-6'>
        <Pagination
          size='lg'
          total={numPages}
          defaultValue={currentPage}
          onPreviousPage={prevPage}
          onNextPage={nextPage}
          value={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    );

  return <div className='mt-4 lg:mt-6'> <Skeleton height={40} /> </div>;
};
