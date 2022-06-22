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
  {
    id: 3,
    user: {
      id: 16,
      name: 'Mollie'
    },
    rating: 6.1,
    comment: 'A movie that will take you to another world full of emotions.',
    date: '2022-05-05T12:18:18.002Z'
  },
  {
    id: 4,
    user: {
      id: 13,
      name: 'Zak'
    },
    rating: 5.6,
    comment: 'I really find it difficult to believe this movie is rated highly by people. It\'s hands down the worst movie I\'ve seen in my life',
    date: '2022-04-21T12:18:18.002Z'
  }
];
