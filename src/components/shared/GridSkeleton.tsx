import { Skeleton } from '@mantine/core';

export const GridSkeleton = () => {
  return (
    <div className='grid grid-cols-[repeat(2,170px)] md:grid-cols-[repeat(3,170px)] lg:grid-cols-[repeat(5,170px)] gap-4 lg:gap-6'>
      {new Array(20).fill(0).map((item) => (
        <Skeleton width={170} height={60} />
      ))}
    </div>
  );
};
