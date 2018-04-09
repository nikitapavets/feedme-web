import App from '../pages/app/app';
import Home from '../pages/home/home.container';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      }
    ]
  }
];

export default routes;
