import { Button, Title, Text } from '@mantine/core';

const NotFoundView = () => {
  return(
  <section className='flex justify-center items-center text-center h-screen'>
    <div>
      <Title order={1}>Page Not Found</Title>
      <Text size='md' className='my-4'>
        The resource requested could not be found on this server.
      </Text>
      <Button variant='gradient' size='lg' component='a' href='/'>
        Go back
      </Button>
    </div>
  </section>);
};

export default NotFoundView;
