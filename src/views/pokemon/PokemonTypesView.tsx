import React from 'react';
import { PokemonTypeList } from '@/components/pokemons-type/PokemonTypeList';
import { Card, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


const PokemonTypesView = () => {

  return (
    <>
      <meta
        name='description'
        content='Pokemon app to show pokemon characters'
      />
      <title> Pokemon By Category | Pokemon App </title>
      <Title order={1} tt='capitalize' className='mb-5'>
        Pokemon Types
      </Title>
      <Card className='block flex justify-center p-5'>
        <Card.Section className='flex justify-center p-[1rem] sm:p-[2rem] md:p-[3rem] lg:p-[5rem] min-h-min'>
          <div className='min-h-32 w-full sm:w-auto'>
            <PokemonTypeList />
          </div>
        </Card.Section>
      </Card>
    </>
  );
};

export default PokemonTypesView;
