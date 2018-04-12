export const getSubredditName = (location = '') => {
  const match = location.match(/\/t[0-9]_.+/);

  return match ? match[0].substr(1) : null;
};
