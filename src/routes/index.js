import config from '../config';

import Home from '../pages/HomePage/HomePage.js';
import Introduce from '../pages/Introduce/Introduce.js';
import Collections from '../pages/Collections/Collection.js';
import News from '../pages/News/News.js';
import Contact from '../pages/Contact/Contact.js';
import Stores from '../pages/Stores/Stores.js';
import Product from '../pages/Product/Product.js';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.introduce,
    component: Introduce,
  },
  {
    path: config.routes.collections,
    component: Collections,
  },
  {
    path: config.routes.news,
    component: News,
  },
  {
    path: config.routes.contact,
    component: Contact,
  },
  {
    path: config.routes.stores,
    component: Stores,
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
