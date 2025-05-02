import React from 'react';
import { PokemonTypeList } from '@/components/pokemons-type/PokemonTypeList';
import { Card, Title } from '@mantine/core';

const PokemonTypesView = () => {
  return (
    <>
    {/*   <meta
        name='description'
        content='Pokemon app to show pokemon characters'
      />
      <title> Pokemon By Category | Pokemon App </title> */}
      <Title order={1} tt='capitalize' className='mb-5'>
        Pokemon Types
      </Title>
      <Card className='block flex justify-center p-5'>
        <Card.Section className='flex justify-center p-[5rem] min-h-min'>
          <div>
            <PokemonTypeList />
          </div>
        </Card.Section>
      </Card>
    </>
  );
};

export default PokemonTypesView;
