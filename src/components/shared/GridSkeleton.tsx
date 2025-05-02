import { Skeleton } from '@mantine/core';

export const GridSkeleton = () => {
  return (
    <>
      {new Array(20).fill(0).map((item) => (
        <Skeleton width={170} height={60} />
      ))}
    </>
  );
};
