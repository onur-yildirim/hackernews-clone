import React from 'react';

const HomePage = React.lazy(() => import('pages/Home'));
const DetailPage = React.lazy(() => import('pages/Detail'));

const routes = [
  {
    Component: HomePage,
    name: 'Home',
    path: '/'
  },
  {
    Component: DetailPage,
    name: 'Detail',
    path: '/news/:id'
  }
];

export default routes;
