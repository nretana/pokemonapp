import React, { ComponentType } from 'react';

type ComponentRouteProps<T> = {
  routeKey: string;
  component: ComponentType<T>;
};

export const ComponentRoute = <T extends Record<string, unknown>>({
  component,
  routeKey,
  ...props
}: ComponentRouteProps<T>) => {
  const Component = component as ComponentType;

  return <Component {...(props as T)} />;
};
