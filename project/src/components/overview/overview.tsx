type OverviewProps = {
  description: string;
  rating: number;
  director: string;
  starring: string[];
};

function Overview({description, rating, director, starring}: OverviewProps): JSX.Element {
  return (
    <>
      <div className='film-rating'>
        <div className='film-rating__score'>{rating}</div>
        <p className='film-rating__meta'>
          <span className='film-rating__level'>Very good</span>
          <span className='film-rating__count'>240 ratings</span>
        </p>
      </div>

      <div className='film-card__text'>
        {description}

        <p className='film-card__director'>
          <strong>Director: {director}</strong>
        </p>

        <p className='film-card__starring'>
          <strong>
            Starring: {starring.join(', ')}
            &nbsp;and other
          </strong>
        </p>
      </div>
    </>
  );
}
export default Overview;
