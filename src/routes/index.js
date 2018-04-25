import App from '../pages/app/app.container';
import Home from '../pages/home/home.container';
import Subreddit from '../pages/subreddit/subreddit.container';
import Post from '../pages/post/post.container';

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
        path: '/subreddits/:subredditName',
        exact: true,
        component: Subreddit
      },
      {
        path: '/subreddits/:subredditName/posts/:postName',
        exact: true,
        component: Post
      }
    ]
  }
];

export default routes;
