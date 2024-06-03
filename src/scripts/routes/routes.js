/* eslint-disable camelcase */
import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Aboutus from '../views/pages/aboutus';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/aboutus': Aboutus,
  '/detail/:id': Detail,
};

export default routes;
