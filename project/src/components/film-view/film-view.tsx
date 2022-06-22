import { useState, MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';

import Header from '../header/header';
import FilmsList from '../films-list/films-list';
import Overview from '../overview/overview';
import Details from '../details/details';
import ReviewsList from '../reviews-list/reviews-list';

import { Film } from '../../types/films';
import { Review } from '../../types/reviews';

type FilmViewProps = {
  films: Film[];
  reviews: Review[];
};

const RELATED_FILMS_COUNT = 4;

function FilmView({ films, reviews }: FilmViewProps): JSX.Element {
  const params = useParams();
  const currentId = Number(params.id);
  const currentFilm = films.filter((item) => item.id === currentId)[0];

  const {
    name,
    genre,
    released,
    posterImage,
    rating,
    description,
    director,
    starring,
    backgroundImage,
  } = currentFilm;
  const relatedFilms = films
    .filter((item) => item.id !== currentId)
    .slice(0, RELATED_FILMS_COUNT);

  const tabsNames = ['Overview', 'Details', 'Reviews'];
  const [activeTab, setActiveTab] = useState(tabsNames[0]);

  const navigate = useNavigate();

  const handlePlayButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    navigate(`/player/${currentId}`);
  };

  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>
          <Header className='film-card__head' />

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{genre}</span>
                <span className='film-card__year'>{released}</span>
              </p>

              <div className='film-card__buttons'>
                <button
                  className='btn btn--play film-card__button'
                  type='button'
                  onClick={handlePlayButtonClick}
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className='btn btn--list film-card__button'
                  type='button'
                >
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href='add-review.html' className='btn film-card__button'>
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img
                src={posterImage}
                alt={`${name} poster`}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  {tabsNames.map((tab) => (
                    <li
                      key={tab}
                      className={cn('film-nav__item', {
                        'film-nav__item--active': tab === activeTab,
                      })}
                    >
                      <a
                        href={`/#${tab}`}
                        className='film-nav__link'
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab);
                        }}
                      >
                        {tab}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              {activeTab === tabsNames[0] && (
                <Overview
                  description={description}
                  rating={rating}
                  director={director}
                  starring={starring}
                />
              )}
              {activeTab === tabsNames[1] && (
                <Details currentFilm={currentFilm} />
              )}
              {activeTab === tabsNames[2] && <ReviewsList reviews={reviews} currentId={currentId} />}
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <FilmsList films={relatedFilms} />
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
    </>
  );
}
export default FilmView;
