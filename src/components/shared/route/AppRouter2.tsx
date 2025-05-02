import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { routes } from '@/configs/app.route.config';
import { RouteTree } from '@/@types/route';
import { FallbackContent } from '../FallbackContext';
import { AppLayout } from '../layouts/AppLayout';
import { Navigate } from 'react-router-dom';
import { appConfig } from '@/configs/app.config';
import { Routes } from 'react-router-dom';


export const AppRouter2 = () => {
  /* const allRoutes = createRoutesFromElements(
    <Route errorElement={<FallbackContent />}>
      <Route path='/' element={<Navigate replace to={appConfig.entryPath} />} />
      {routes.map((route) => (
        <Route path={route.path} element={<AppLayout {...route} />} />
      ))}
    </Route>
  ); */

  return (<Routes>
    <Route path='/' element={<Navigate replace to={appConfig.entryPath} />} />
    {routes.map((route) => (
        <Route path={route.path} element={<AppLayout {...route} />} />
      ))}
  </Routes>)
};
