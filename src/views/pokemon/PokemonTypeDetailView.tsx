import { PokemonGridRoot } from '@/components/pokemon-type-detail/PokemonContextProvider';
import { useParams } from 'react-router-dom';
import { Card, Title } from '@mantine/core';
import { IconButton } from '@/components/shared/icon-button/IconButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

const PokemonTypeDetailView = () => {
  const { typeName } = useParams();
  const name = (typeName && typeName.trim() && typeName) || '';
  const navigate = useNavigate();

  const location = useLocation();
  const typeId = location.state?.typeId;

  if (isNaN(typeId)) {
    navigate('/404');
  }

  return (
    <>
      <meta
        name='description'
        content='Pokemon app showing pokemon characters'
      />
      <title> Pokemons | Pokemon App </title>
      <>
        <div className='flex'>
          <IconButton
            icon={IconArrowNarrowLeft}
            ariaLabel='Go back'
            className='me-3'
            onClick={() => navigate('/types')}
          />
          <Title order={1} tt='capitalize' className='mb-4'>
            {name.length > 0 ? `${name} Pokemons` : 'Pokemons'}
          </Title>
        </div>
        <Card className='block flex justify-center p-5'>
          <Card.Section className='flex justify-center min-h-48 p-[1rem] sm:p-[2rem] md:p-[3rem] lg:p-[5rem]'>
            <div className='w-full sm:w-auto'>
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
