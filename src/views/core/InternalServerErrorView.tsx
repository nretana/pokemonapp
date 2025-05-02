import { Button, Title, Text } from '@mantine/core';

const InternalServerErrorView = () => {
  return (
    <section className='flex justify-center items-center text-center h-screen'>
      <div>
        <Title order={1}>Internal server error!</Title>
        <Text size='sm' className='my-4'>
          The server encountered an error and could not complete your request.
          Please, try again later.
        </Text>
        <Button variant='gradient' size='lg' component='a' href='/'>Retry</Button>
      </div>
    </section>
  );
};

export default InternalServerErrorView;
