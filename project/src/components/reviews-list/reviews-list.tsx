import ReviewItem from '../review-item/review-item';
import { Review } from '../../types/reviews';

type ReviewsProps = {
  reviews: Review[];
  currentId: number;
};

function ReviewsList({ reviews, currentId }: ReviewsProps): JSX.Element {
  const rightCol = reviews.filter((item, index) => (index + 1) % 2 === 0);
  const leftCol = reviews.filter((item, index) => (index + 1) % 2 !== 0);

  return (
    <div className='film-card__reviews film-card__row'>
      <div className='film-card__reviews-col'>
        {leftCol.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </div>

      <div className='film-card__reviews-col'>
        {rightCol.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </div>
    </div>
  );
}
export default ReviewsList;
