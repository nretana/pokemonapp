import { useGetPokemonTypesQuery } from '@/store/services/PokemonTypeService';
import { Button, Alert } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { getLastSegmentPath } from '@/utils/getLastSegmentPath';
import { GENERAL_ERROR } from '@/constants/app.errors.constants';
import { GridSkeleton } from '../shared/GridSkeleton';


export const PokemonTypeList = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isError } =
    useGetPokemonTypesQuery({});

  const handleClick = (name: string, typeId: number) =>
    navigate(`/types/${name}`, { state: { typeId } });

 
  if(isError) return(<Alert color='red'>{GENERAL_ERROR}</Alert>)

  if(isSuccess) return(
      <div className='grid grid-cols-[repeat(2,170px)] md:grid-cols-[repeat(3,170px)] lg:grid-cols-[repeat(5,170px)] gap-2 md:gap-4 lg:gap-6'>
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
      </div>);

      return(<GridSkeleton />)
};
