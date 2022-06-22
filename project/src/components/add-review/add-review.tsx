import { useParams, Link } from 'react-router-dom';
import { Film } from '../../types/films';
import ReviewForm from '../review-form/review-form';

type AddReviewProps = {
  films: Film[];
}

function AddReview({films}: AddReviewProps): JSX.Element {
  const params = useParams();
  const currentId = Number(params.id);
  const currentFilm = films.filter((item) => item.id === currentId)[0];

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img
            src={currentFilm.backgroundImage}
            alt={currentFilm.name}
          />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <div className='logo'>
            <Link to='/' className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </Link>
          </div>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${currentId}`} className='breadcrumbs__link'>
                  {currentFilm.name}
                </Link>
              </li>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${currentId}/review`} className='breadcrumbs__link'>
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img
                  src='img/avatar.jpg'
                  alt='User avatar'
                  width='63'
                  height='63'
                />
              </div>
            </li>
            <li className='user-block__item'>
              <a href='/#' className='user-block__link'>
                Sign out
              </a>
            </li>
          </ul>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img
            src={currentFilm.posterImage}
            alt={`${currentFilm.name} poster`}
            width='218'
            height='327'
          />
        </div>
      </div>

      <div className='add-review'>
        <ReviewForm />
      </div>
    </section>
  );
}
export default AddReview;
