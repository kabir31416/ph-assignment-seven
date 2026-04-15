import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import MainLayout from '../layout/Mainlayout';
import TimelinePage from '../pages/TimelinePage';
import StatsPage from '../pages/StatsPage';
import ErrorPage from '../pages/ErrorPage';
import FriendsDetails from '../pages/FriendsDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,

        loader: async () => {
          const friendsPromise = new Promise(resolve => {
            setTimeout(() => {
              resolve(fetch('/friends.json').then(res => res.json()));
            }, 1000);
          });
          return { friends: friendsPromise };
        }
      },

      {
        path: "/timeline",
        element: <TimelinePage></TimelinePage>
      },

      {
        path: "/stats",
        element: <StatsPage></StatsPage>
      },

      {
        path: "/friendsdetails/:id",
        element: <FriendsDetails></FriendsDetails>
      },

    ],

    errorElement: <ErrorPage></ErrorPage>,
  },

]);