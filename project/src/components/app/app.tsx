import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../home/home';

import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import PrivateRoute from '../private-route/private-route';
import FilmView from '../film-view/film-view';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../page-404/page-404';
import {Film} from '../../types/films';

type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoDate: string;
  films: Film[];
};

function App({ promoTitle, promoGenre, promoDate, films }: AppProps): JSX.Element {
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
              films={films}
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
        <Route path={AppRoute.Film} element={<FilmView />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
