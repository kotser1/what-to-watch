import React from 'react';
import { Film } from '../../types/films';

type DetailsProps = {
  currentFilm: Film;
}

function Details({ currentFilm }: DetailsProps): JSX.Element {
  const { director, starring, runTime, genre, released } = currentFilm;
  return (
    <div className='film-card__text film-card__row'>
      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Director</strong>
          <span className='film-card__details-value'>{director}</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Starring</strong>
          <span className='film-card__details-value'>
            {starring.map((item) => (
              <React.Fragment key={item}>
                {item} <br />
              </React.Fragment>
            ))}
          </span>
        </p>
      </div>

      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Run Time</strong>
          <span className='film-card__details-value'>{Math.floor(runTime/60)}h {runTime%60}m</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Genre</strong>
          <span className='film-card__details-value'>{genre}</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Released</strong>
          <span className='film-card__details-value'>{released}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
