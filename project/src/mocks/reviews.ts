import { Review } from '../types/reviews';

export const mockReviews: Review[] = [
  {
    id: 1,
    user: {
      id: 11,
      name: 'Jack',
    },
    rating: 9.8,
    comment:
      'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2022-04-22T12:18:18.002Z',
  },
  {
    id: 2,
    user: {
      id: 12,
      name: 'Isaac',
    },
    rating: 4,
    comment:
      'This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.',
    date: '2022-04-14T12:18:18.002Z',
  },
];
