import React from 'react';
import {
  Button,
  Popover
} from '@mantine/core';
import { getLastSegmentPath } from '@/utils/getLastSegmentPath';
import { useDisclosure } from '@mantine/hooks';
import { PokemonImage } from './PokemonImage';
import { PokemonModal } from '../modal/PokemonModal';


type PokemonPopOverProps = {
  name: string;
  url: string;
};

export const PokemonPopOver: React.FC<PokemonPopOverProps> = ({
  name,
  url,
}) => {
  const pokemonId = parseInt(getLastSegmentPath(url));
  const [openedPopover, { close: closePopover, open: openPopover }] =
    useDisclosure(false);
  const [openedModal, { close: closeModal, open: openModal }] =
    useDisclosure(false);

  return (
    <>
      <Popover
        width={180}
        position='right'
        withArrow
        shadow='md'
        opened={openedPopover}
      >
        <Popover.Target>
          <Button
            size='xl'
            variant='gradient'
            onClick={openModal}
            onMouseEnter={openPopover}
            onMouseLeave={closePopover}
          >
            <span className='capitalize truncate ...'>{name}</span>
          </Button>
        </Popover.Target>
        <Popover.Dropdown style={{ minHeight: 120 }}>
          <div className='flex justify-center items-center h-full relative'>
            <PokemonImage pokemonId={pokemonId} />
          </div>
        </Popover.Dropdown>
      </Popover>
      {openedModal && (
        <PokemonModal
          pokemonId={pokemonId}
          opened={openedModal}
          onClose={closeModal}
        />
      )}
    </>
  );
};
