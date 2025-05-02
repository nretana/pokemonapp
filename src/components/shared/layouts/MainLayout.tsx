import React, { ComponentType } from 'react';
import { ComponentRoute } from '../route/ComponentRoute';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import { Card } from '@mantine/core';

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
          <div>
            <ThemeToggle />
          </div>
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
