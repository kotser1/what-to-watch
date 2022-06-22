import { Fragment, useState, ChangeEvent } from 'react';

const MAX_RATING = 10;
const ratings = Array.from({length: MAX_RATING}, (v, k) => k + 1).reverse();

function ReviewForm() {
  const [, setRatingData] = useState<number | null>(null);
  const [commentData, setCommentData] = useState('');

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRatingData(Number(e.target.value));
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData(e.target.value);
  };

  return (
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
  );
}
export default ReviewForm;
