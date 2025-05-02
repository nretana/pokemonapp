import {
  Center,
  Group,
  Modal,
  ModalBaseProps,
  ModalBaseCloseButtonProps,
  Title,
  Alert,
  useComputedColorScheme,
  List,
  ListItem,
} from '@mantine/core';
import type { ModalProps } from '@mantine/core';
import React from 'react';
import { useGetPokemonQuery } from '@/store/services/PokemonService';
import { Card, Image, Text } from '@mantine/core';
import { GENERAL_ERROR } from '@/constants/app.errors.constants';
import { LoadingContent } from '@/components/shared/LoadingContent';
import { IconPhotoFilled } from '@tabler/icons-react';
import { MODE_LIGHT } from '@/constants/theme.constant';
import { IconBoltFilled, IconPointFilled } from '@tabler/icons-react';


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
  const { data, isFetching, isLoading, isSuccess, isError } =
    useGetPokemonQuery({ pokemonId });

  return (
    <>
      {isFetching || (isLoading && <LoadingContent />)}
      {isError && <Alert>{GENERAL_ERROR}</Alert>}
      {isSuccess && (
        <Modal.Root
          opened={opened}
          onClose={onClose}
          centered
        >
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Body className='p-0 border-0'>
              <Card shadow='sm' padding='sm' bg='transparent'>
                <Card.Section

                >
                  <Title order={4} tt='capitalize' className='text-center my-4'>
                    {data?.name}
                  </Title>
                  <Center>
                    {data.imageUrl ? (
                      <Image
                        src={data?.imageUrl}
                        alt={data?.name}
                        w='auto'
                        height={100}
                        fit='contain'
                      />
                    ) : (
                      <IconPhotoFilled size={40} />
                    )}
                  </Center>
                </Card.Section>
                <Group justify='space-between' mt='md' mb='xs'>
                  <Title order={5} fw={500}>
                    Abilities
                  </Title>
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
                    data?.abilities.map((item) => (
                      <ListItem>
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