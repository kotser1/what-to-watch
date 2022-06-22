import { useState } from 'react';

import Card from '../card/card';
import { Film } from '../../types/films';

type FilmsListProps = {
  films: Film[];
};

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [, setActiveFilmId] = useState<number | null>(null);

  const handleCardHover = (id: number | null) => {
    setActiveFilmId(id);
  };

  return (
    <div className='catalog__films-list'>
      {films.map((item) => (
        <Card key={item.id} film={item} onCardHover={handleCardHover} />
      ))}
    </div>
  );
}
export default FilmsList;
