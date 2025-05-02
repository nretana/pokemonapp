import { usePokemonContext } from '../context/pokemon-context';
import { Pagination } from '@mantine/core';
import { PokemonContext } from '../context/pokemon-context';
import { Skeleton } from '@mantine/core';


export const PokemonPagination = () => {
  const { queryResult, paginationResult, currentPage, setCurrentPage } = usePokemonContext();
  const { numPages } = paginationResult;

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className='flex justify-center mt-5'>
      {queryResult?.isFetching ||
        (queryResult?.isLoading && <Skeleton height={30} />)}
      {queryResult?.isSuccess && (
        <Pagination
          size='lg'
          total={numPages}
          defaultValue={currentPage}
          onPreviousPage={prevPage}
          onNextPage={nextPage}
          value={currentPage}
          onChange={setCurrentPage}
        />
      )}
    </div>
  );
};
