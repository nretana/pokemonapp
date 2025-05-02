import { Skeleton } from '@mantine/core';

export const GridSkeleton = () => {
  return (
    <div className='grid grid-cols-[repeat(1, 1fr)] md:grid-cols-[repeat(3,170px)] lg:grid-cols-[repeat(5,170px)] gap-2 md:gap-4 lg:gap-6 w-full'>
      {new Array(20).fill(0).map((item) => (
        <Skeleton width={170} height={60} />
      ))}
    </div>
  );
};
