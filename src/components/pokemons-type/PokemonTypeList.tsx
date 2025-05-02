import { useGetPokemonTypesQuery } from '@/store/services/PokemonTypeService';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { getLastSegmentPath } from '@/utils/getLastSegmentPath';
import { GridSkeleton } from '../shared/GridSkeleton';
import { GeneralErrorAlert } from '../shared/GeneralErrorAlert';

export const PokemonTypeList = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isError } = useGetPokemonTypesQuery({});

  const handleClick = (name: string, typeId: number) =>
    navigate(`/types/${name}`, { state: { typeId } });

  if (isError) return <GeneralErrorAlert />;

  if (isSuccess)
    return (
      <div className='grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,170px)] md:grid-cols-[repeat(3,170px)] lg:grid-cols-[repeat(5,170px)] gap-4 lg:gap-6 w-full'>
        {data?.results &&
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
                {item.name}
              </Button>
            );
          })}
      </div>
    );

  return <GridSkeleton />;
};
