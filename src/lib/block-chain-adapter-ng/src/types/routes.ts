import { Route } from './wallet-types';

export type RouteKeys = 'index'  | 'error' ;

export type Routes = Record<any, Route>;

export const enum PERMISSIONS {
  USER = 'user',
  ADMIN = 'admin',
  ANONYMOUS = 'anonymous',
}

export const routes: Routes = {
  index: {
    path: '/',
  },
  error: {
    path: '/error',
  }
};
