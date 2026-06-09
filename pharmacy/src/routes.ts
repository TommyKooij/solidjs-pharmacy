import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: lazy(() => import("./pages/cart")),
  },
  {
    path: "/account",
    component: lazy(() => import("./pages/account")),
  },
  {
    path: "/product/:id",
    component: lazy(() => import("./pages/product")),
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
