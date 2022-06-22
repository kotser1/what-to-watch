import { Film } from '../../types/films';
import Header from '../header/header';
import FilmsList from '../films-list/films-list';

type MyListProps = {
  favoriteFilms: Film[];
};

function MyList({ favoriteFilms }: MyListProps): JSX.Element {
  return (
    <div className='user-page'>
      <Header className='user-page__head' title='My list' />

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <FilmsList films={favoriteFilms} />
      </section>

      <footer className='page-footer'>
        <div className='logo'>
          <a href='main.html' className='logo__link logo__link--light'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <div className='copyright'>
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default MyList;
