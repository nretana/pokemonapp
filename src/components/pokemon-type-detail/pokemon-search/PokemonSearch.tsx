import { CloseButton, TextInput } from '@mantine/core';
import { useEffect, useState, use } from 'react';
import { PokemonContext } from '../context/pokemon-context';
import { IconSearch } from '@tabler/icons-react';


export const PokemonSearch = () => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const { setFilters } = use(PokemonContext);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFilters('searchText', inputSearch);
    }, 600);

    return () => {
      clearTimeout(timeOut);
    };
  }, [inputSearch]);

  return (
    <div className='py-4 flex justify-end'>
      <TextInput
        placeholder='Search by name'
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
        className='w-full lg:w-fit'
        size='lg'
        rightSection={
          <CloseButton
            aria-label='Clear input'
            onClick={() => setInputSearch('')}
            style={{ display: inputSearch ? undefined : 'none' }}
          />
        }
        leftSection={<IconSearch size={16} />}
      />
    </div>
  );
};
