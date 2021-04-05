import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { AuthContext } from 'context/index';
import { Layout } from 'container/index';
import {
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  FORGET_PASSWORD_PAGE,
  HOME_PAGE,
  USER_PROFILE_PAGE,
  USER_ACCOUNT_SETTINGS_PAGE,
  BOOKING_PAGE,
  BOOKING_LIST_PAGE,
  BOOKING_DETAIL_PAGE,
  EXHBN_DETAIL_PAGE,
  EXHBN_LIST_PAGE,
  HALL_DETAIL_PAGE,
  HALL_LIST_PAGE,
  LISTING_SEARCH_POST_PAGE,
  ADD_EXHBN_PAGE,
  UPDATE_EXHBN_PAGE,
  ADD_IMAGE_PAGE
} from 'settings/constant';

/**
 *
 * Public Routes
 *
 */
const Loading = () => null;

const routes = [
  {
    path: HOME_PAGE,
    component: Loadable({
      loader: () =>
        import('container/Home/Home'),
      loading: Loading,
      modules: ['Home'],
    }),
    exact: true,
  },
  {
    path: LOGIN_PAGE,
    component: Loadable({
      loader: () =>
        import('container/Auth/SignIn/SignIn'),
      loading: Loading,
      modules: ['SignIn'],
    }),
  },
  {
    path: REGISTRATION_PAGE,
    component: Loadable({
      loader: () =>
        import('container/Auth/SignUp/SignUp'),
      loading: Loading,
      modules: ['SignUp'],
    }),
  },
  {
    path: FORGET_PASSWORD_PAGE,
    component: Loadable({
      loader: () =>
        import('container/Auth/ForgetPassword'),
      loading: Loading,
      modules: ['ForgetPassword'],
    }),
  },
  {
    path: USER_PROFILE_PAGE,
    component: Loadable({
      loader: () =>
        import('container/Agent/AccountDetails/AgentDetailsViewPage'),
      loading: Loading,
      modules: ['AgentDetailsViewPage'],
    }),
  },
  {
    path: `${BOOKING_PAGE}/:exhbnNum`,
    component: Loadable({
      loader: () =>
        import('container/SinglePage/Booking/Booking'),
      loading: Loading,
      modules: ['Booking'],
    }),
  },
  {
    path: BOOKING_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/SinglePage/Booking/BookingList'),
      loading: Loading,
      modules: ['BookingList'],
    }),
  },
  {
    path: EXHBN_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/Listing/Listing'),
      loading: Loading,
      modules: ['ExhbnList'],
    }),
  },
  {
    path: HALL_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/Listing/HallListing'),
      loading: Loading,
      modules: ['HallList'],
    }),
  },
  {
    path: `${BOOKING_DETAIL_PAGE}/:bookNum`,
    component: Loadable({
      loader: () =>
        import('container/SinglePage/Booking/BookingDetail'),
      loading: Loading,
      modules: ['BookingDetail'],
    }),
  },
  {
    path: `${EXHBN_DETAIL_PAGE}/:exhbnNum`,
    component: Loadable({
      loader: () =>
        import('container/SinglePage/ExhbnDetail'),
      loading: Loading,
      modules: ['ExbhnDetail'],
    }),
  },
  {
    path: `${HALL_DETAIL_PAGE}/:hallNum`,
    component: Loadable({
      loader: () =>
        import('./container/HallPage/HallDetail'),
      loading: Loading,
      modules: ['HallDetail'],
    }),
  },
  {
    path: LISTING_SEARCH_POST_PAGE,
    component: Loadable({
      loader: () =>
        import('./container/Listing/SearchListing'),
      loading: Loading,
      modules: ['SearchListing'],
    }),
  },

  {
    path: `${HALL_DETAIL_PAGE}/:hallNum`,
    component: Loadable({
      loader: () =>
        import('./container/HallPage/HallDetail'),
      loading: Loading,
      modules: ['HallDetail'],
    }),
  },
  {
    path: ADD_EXHBN_PAGE,
    component: Loadable({
      loader: () =>
        import('./container/AddListing/AddExhbn'),
      loading: Loading,
      modules: ['AddExhbn'],
    }),
  },
  {
    path: `${UPDATE_EXHBN_PAGE}/:exhbnNum`,
    component: Loadable({
      loader: () =>
        import('./container/AddListing/UpdateExhbn'),
      loading: Loading,
      modules: ['UpdateExhbn'],
    }),
  },
  {
    path: ADD_IMAGE_PAGE,
    component: Loadable({
      loader: () =>
        import('./container/AddListing/HotelPhotos'),
      loading: Loading,
      modules: ['HotelPhotos'],
    }),
  },
];

/**
 *
 * Protected Route Component
 *
 */
const AddListing = Loadable({
  loader: () =>
    import('./container/AddListing/AddListing'),
  loading: Loading,
  modules: ['AddListing'],
});

const AgentAccountSettingsPage = Loadable({
  loader: () =>
    import('./container/Agent/AccountSettings/AgentAccountSettingsPage'),
  loading: Loading,
  modules: ['AgentAccountSettingsPage'],
});



/**
 *
 * Not Found Route Component
 *
 */

const NotFound = Loadable({
  loader: () =>
    import('./container/404/Error404'),
  loading: Loading,
  modules: ['NotFound'],
});

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Route
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />
      }
      {...rest}
    />
  );
};

/**
 *
 * Overall Router Component
 *
 */

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <ProtectedRoute path={ADD_EXHBN_PAGE} component={AddListing} />
        <ProtectedRoute
          path={USER_ACCOUNT_SETTINGS_PAGE}
          component={AgentAccountSettingsPage}
        />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App
