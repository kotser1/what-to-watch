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
import {Review} from '../../types/reviews';

type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoDate: string;
  films: Film[];
  reviews: Review[];
};

function App({ promoTitle, promoGenre, promoDate, films, reviews }: AppProps): JSX.Element {
  const favoriteFilms = films.filter((item) => item.isFavorite);

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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList favoriteFilms={favoriteFilms} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmView films={films} reviews={reviews} />} />
        <Route path={AppRoute.AddReview} element={<AddReview films={films} />} />
        <Route path={AppRoute.Player} element={<Player films={films} />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
