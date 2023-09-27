import config from '../config';

import Home from '../pages/HomePage/HomePage.js';
import Product from '../pages/Product/Product.js';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.product,
    component: Product,
  },
  
  // {
  //   path: config.routes.search,
  //   component: Search,
  //   layout: null,
  // },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
