import { Link } from 'react-router-dom';

import { Film } from '../../types/films';

type CardProps = {
  film: Film;
  onCardHover?: (id: number | null) => void;
};

function Card({ film, onCardHover}: CardProps): JSX.Element {
  const { name, previewImage, id } = film;
  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseEnter={() => onCardHover !== undefined ? onCardHover(id) : null}
      onMouseLeave={() => onCardHover !== undefined ? onCardHover(null) : null}
    >
      <div className='small-film-card__image'>
        <img src={previewImage} alt={name} width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}
export default Card;
