import App from '../pages/app/app';
import Home from '../pages/home/home.container';
import Subreddit from '../pages/subreddit/subreddit.container';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/subreddits/:name',
        exact: true,
        component: Subreddit
      }
    ]
  }
];

export default routes;
