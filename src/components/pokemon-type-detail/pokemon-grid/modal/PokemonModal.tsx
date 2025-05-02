import {
  Center,
  Group,
  Modal,
  ModalBaseProps,
  ModalBaseCloseButtonProps,
  Title,
  List,
  Divider,
  ListItem,
} from '@mantine/core';
import type { ModalProps } from '@mantine/core';
import React from 'react';
import { useGetPokemonQuery } from '@/store/services/PokemonService';
import { Card, Image, Text } from '@mantine/core';
import { LoadingContent } from '@/components/shared/LoadingContent';
import { IconPhotoFilled } from '@tabler/icons-react';
import { IconPointFilled } from '@tabler/icons-react';
import { GeneralErrorAlert } from '@/components/shared/GeneralErrorAlert';

type PokemonModalProps = {
  pokemonId: number;
} & ModalBaseProps &
  ModalProps &
  ModalBaseCloseButtonProps;

export const PokemonModal: React.FC<PokemonModalProps> = ({
  pokemonId,
  opened,
  onClose,
}) => {
  const { data, isFetching, isLoading, isSuccess, isError } = useGetPokemonQuery({ pokemonId });

  return (
    <>
      {isFetching || (isLoading && <LoadingContent />)}
      {isError && <GeneralErrorAlert />}
      {isSuccess && (
        <Modal.Root opened={opened} onClose={onClose} centered>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Body className='p-0 border-0'>
              <Card shadow='sm' padding='lg' bg='transparent'>
                <Card.Section
                  bg='#2c2c30'
                  className='rounded-xl mx-0 mt-0 h-full'
                >
                  <Center>
                    {data.imageUrl ? (
                      <Image
                        src={data?.imageUrl}
                        alt={data?.name}
                        w='auto'
                        height={100}
                      />
                    ) : (
                      <span className='flex items-center h-[120px]'>
                        <IconPhotoFilled size={40} />
                      </span>
                    )}
                  </Center>
                </Card.Section>
                <Title order={4} tt='capitalize' className='text-center my-4'>
                  {data?.name}
                </Title>
                <Group justify='space-between' mb='xs'>
                  <Title order={5}>Abilities</Title>
                  <Divider my='sm' variant='dashed' />
                </Group>
                <List icon={<IconPointFilled size={24} />}>
                  {data?.abilities.length === 0 && (
                    <ListItem>
                      <Text size='sm' tt='capitalize'>
                        {' '}
                        {`${data.name} does not have abilities`}
                      </Text>
                    </ListItem>
                  )}
                  {data?.abilities.length > 0 &&
                    data?.abilities.map((item, index) => (
                      <ListItem key={`ability_${index}`}>
                        <Text size='sm'>{item.effect}</Text>
                      </ListItem>
                    ))}
                </List>
              </Card>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      )}
    </>
  );
};
