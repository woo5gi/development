import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
// import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Dashboard Routes
    {
      path: 'bora',
      element: <DashboardLayout />,
      children: [
        // { path: '/', element: <Navigate to="/dashboard/blog/posts" replace /> },
        // { path: 'one', element: <PageOne /> },
        // { path: 'two', element: <PageTwo /> },
        // { path: 'three', element: <PageThree /> },

        // {
        //   path: 'app',
        //   children: [
        //     {
        //       path: '/',
        //       element: <Navigate to="/dashboard/app/four" replace />
        //     },
        //     { path: 'four', element: <PageFour /> },
        //     { path: 'five', element: <PageFive /> },
        //     { path: 'six', element: <PageSix /> }
        //   ]
        // },

        {
          path: 'blog',
          children: [
            { path: '/', element: <BlogPosts /> },
            // { path: 'posts', element: <BlogPosts /> },
            { path: 'post/:title', element: <BlogPost /> },
            { path: 'new-post', element: <BlogNewPost /> }
          ]
        }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ path: '/', element: <BlogPosts /> }]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
// const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
// const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
// const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
// const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
// const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
// const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const BlogPosts = Loadable(lazy(() => import('../pages/dashboard/BlogPosts')));
const BlogPost = Loadable(lazy(() => import('../pages/dashboard/BlogPost')));
const BlogNewPost = Loadable(lazy(() => import('../pages/dashboard/BlogNewPost')));
// Main
// const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
