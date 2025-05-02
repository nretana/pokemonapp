import React, { ComponentType } from 'react';
import { ComponentRoute } from '../route/ComponentRoute';

type MainLayoutProps = {
  routeKey: string;
  component: ComponentType;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  routeKey,
  component,
}) => {
  return (
    <>
      <header className='w-full flex justify-center p-4'>
        <div className='container w-full max-w-6xl p-4'>
        </div>
      </header>
      <main className='w-full flex justify-center'>
        <div className='container w-full max-w-6xl p-4'>
          <ComponentRoute routeKey={routeKey} component={component} />
        </div>
      </main>
      <footer></footer>
    </>
  );
};
