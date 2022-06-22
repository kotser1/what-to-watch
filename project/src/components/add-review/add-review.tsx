import { Fragment, useState, ChangeEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Film } from '../../types/films';

const MAX_RATING = 10;

const ratings = Array.from({length: MAX_RATING}, (v, k) => k + 1).reverse();

type AddReviewProps = {
  films: Film[];
}

function AddReview({films}: AddReviewProps): JSX.Element {
  const params = useParams();
  const currentId = Number(params.id);
  const currentFilm = films.filter((item) => item.id === currentId)[0];

  const [, setRatingData] = useState<number | null>(null);
  const [commentData, setCommentData] = useState('');

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRatingData(Number(e.target.value));
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData(e.target.value);
  };

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
        <form action='#' className='add-review__form'>
          <div className='rating'>
            <div className='rating__stars'>
              {ratings.map((item) => (
                <Fragment key={item}>
                  <input
                    className='rating__input'
                    id={`star-${item}`}
                    type='radio'
                    name='rating'
                    value={item}
                    onChange={handleRatingChange}
                  />
                  <label className='rating__label' htmlFor={`star-${item}`}>
                    Rating {item}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>

          <div className='add-review__text'>
            <textarea
              className='add-review__textarea'
              name='review-text'
              id='review-text'
              placeholder='Review text'
              value={commentData}
              onChange={handleCommentChange}
            >
            </textarea>
            <div className='add-review__submit'>
              <button className='add-review__btn' type='submit'>
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default AddReview;
