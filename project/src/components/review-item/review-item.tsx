import dayjs from 'dayjs';
import { Review } from '../../types/reviews';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({review} : ReviewItemProps) {
  const {id, comment, user, date, rating} = review;

  return (
    <div className='review' key={id}>
      <blockquote className='review__quote'>
        <p className='review__text'>{comment}</p>

        <footer className='review__details'>
          <cite className='review__author'>{user.name}</cite>
          <time className='review__date' dateTime='2016-12-24'>
            {dayjs(date).format('MMMM DD, YYYY')}
          </time>
        </footer>
      </blockquote>

      <div className='review__rating'>{rating}</div>
    </div>
  );
}
export default ReviewItem;
