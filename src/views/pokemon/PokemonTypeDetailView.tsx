import { PokemonGridRoot } from '@/components/pokemon-type-detail/PokemonContextProvider';
import { useParams } from 'react-router-dom';
import { Card, Title } from '@mantine/core';


const PokemonTypeDetailView = () => {
  const { typeName } = useParams();
  const name = (typeName && typeName.trim() && typeName) || '';

  return (
    <>
      {/* <meta
        name='description'
        content='Pokemon app showing pokemon characters'
      />
      <title> Pokemons | Pokemon App </title> */}
      <>
        <Title order={1} tt='capitalize' className='mb-4'>
          {name.length > 0 ? `${name} Pokemons` : 'Pokemons'}
        </Title>
        <Card className='block flex justify-center p-5'>
          <Card.Section className='flex justify-center p-[5rem]'>
            <div>
            <PokemonGridRoot>
                <PokemonGridRoot.Grid />
                <PokemonGridRoot.Pagination />
            </PokemonGridRoot>
            </div>
          </Card.Section>
        </Card>
      </>
    </>
  );
};

export default PokemonTypeDetailView;
