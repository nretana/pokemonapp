import React, { useEffect, ComponentType, Suspense, useCallback } from 'react';
import { ComponentRoute } from '../route/ComponentRoute';
import { LoadingContent } from '../LoadingContent';
import { MainLayout } from './MainLayout';
import { PRIVATE_ROUTE_TYPE, PUBLIC_ROUTE_TYPE } from '@/constants/app.constant';
import { useAppDispatch, setCurrentRouteKey } from '@/store';


type LayoutProps = {
  routeKey: string;
  routeType: string;
  component: ComponentType;
};

export const AppLayout: React.FC<LayoutProps> = ({
  routeKey,
  routeType,
  component,
}) => {

  const dispatch = useAppDispatch();
  const onChangeRouteKey = useCallback(() => {
    dispatch(setCurrentRouteKey(routeKey));
  }, [routeKey]);

  useEffect(() => {
    onChangeRouteKey()
  }, [onChangeRouteKey]);

  return (
    <>
      {routeType ===  PRIVATE_ROUTE_TYPE && (
        <>
          <header></header>
          <main>
            <Suspense fallback={<LoadingContent />}>
              <MainLayout routeKey={routeKey} component={component} />
            </Suspense>
          </main>
          <footer></footer>
        </>
      )}

      {routeType === PUBLIC_ROUTE_TYPE && (
        <ComponentRoute routeKey={routeKey} component={component} />
      )}
    </>
  );
};
