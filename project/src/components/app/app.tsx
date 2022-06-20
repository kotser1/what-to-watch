import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../home/home';

import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import PrivateRoute from '../private-route/private-route';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../page-404/page-404';

type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoDate: string;
};

function App({ promoTitle, promoGenre, promoDate }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Home
              promoFilmTitle={promoTitle}
              promoFilmGenre={promoGenre}
              promoFilmReleaseDate={promoDate}
            />
          }
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
