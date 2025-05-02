import { lazy } from 'react';
import type { RouteTree } from '@/@types/route';
import { PRIVATE_ROUTE_TYPE, PUBLIC_ROUTE_TYPE } from '@/constants/app.constant';


export const appRoutes: RouteTree[] = [
  {
    routeKey: 'pokemon-type-view',
    path: '/types',
    routeType: PRIVATE_ROUTE_TYPE,
    component: lazy(() => import('../views/pokemon/PokemonTypesView')),
    subRoute: [
    ]
  },
  {
    routeKey: 'pokemon-types-detail',
    path: '/types/:typeName',
    routeType: PRIVATE_ROUTE_TYPE,
    component: lazy(() => import('../views/pokemon/PokemonTypeDetailView')),
    subRoute: [],
  }
];

export const miscRoutes: RouteTree[] = [
  {
    routeKey: 'internal-server-error',
    path: '/internal-server-error',
    routeType: PUBLIC_ROUTE_TYPE,
    component: lazy(() => import('../views/core/InternalServerErrorView')),
    subRoute: []
  },
  {
    routeKey: 'not-found-redirect',
    path: '/404',
    routeType: PUBLIC_ROUTE_TYPE,
    component: lazy(() => import('../views/core/NotFoundView')),
    subRoute: []
  },
  {
    routeKey: 'not-found',
    path: '*',
    routeType: PUBLIC_ROUTE_TYPE,
    component: lazy(() => import('../views/core/NotFoundView')),
    subRoute: []
  }
];

export const routes = [...appRoutes, ...miscRoutes];


