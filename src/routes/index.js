import App from '../pages/app';
import Home from '../pages/home';

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
