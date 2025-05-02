import { Center, Title } from '@mantine/core';
import { IconPhotoFilled } from '@tabler/icons-react';
import { Loader } from '@/components/shared/loader/Loader';
import { isValidImageUrl } from '@/utils/isValidImageUrl';
import { useGetPokemonQuery } from '@/store/services/PokemonService';


export const PokemonImage = ({ pokemonId }: { pokemonId: number }) => {

  const { data, isFetching, isLoading, isSuccess, isError } = useGetPokemonQuery({ pokemonId });
  const isValidImgUrl = isValidImageUrl(data?.imageUrl || '');

  return (
    <>
      {(isFetching || isLoading) && (
        <Center h={120}>
          <Loader size='xs' />
        </Center>
      )}
      {isError && (
        <div>
          <Title order={4} className='mb-2'>
            No Image
          </Title>
          <Center>
            <IconPhotoFilled />
          </Center>
        </div>
      )}
      {isSuccess && (
        <div>
          <Title order={6} className='mb-2'>
          <span className='capitalize'>{data?.name}</span>
          </Title>
          <Center>
            {isValidImgUrl ? (
              <img
                src={data?.imageUrl}
                alt={data?.name}
                width={60}
                height={60}
              />
            ) : (
              <IconPhotoFilled size={40} />
            )}
          </Center>
        </div>
      )}
    </>
  );
};
