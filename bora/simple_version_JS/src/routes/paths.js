// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/bora';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  // general: {
  //   pageOne: path(ROOTS_DASHBOARD, '/one'),
  //   pageTwo: path(ROOTS_DASHBOARD, '/two'),
  //   pageThree: path(ROOTS_DASHBOARD, '/three')
  // },
  // app: {
  //   root: path(ROOTS_DASHBOARD, '/app'),
  //   pageFour: path(ROOTS_DASHBOARD, '/app/four'),
  //   pageFive: path(ROOTS_DASHBOARD, '/app/five'),
  //   pageSix: path(ROOTS_DASHBOARD, '/app/six')
  // },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog'),
    post: path(ROOTS_DASHBOARD, '/blog/post/:title'),
    postById: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
    newPost: path(ROOTS_DASHBOARD, '/blog/new-post')
  }
};
