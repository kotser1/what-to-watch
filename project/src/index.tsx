import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { mockFilms } from './mocks/films';
import { mockReviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoTitle={'The Grand Budapest Hotel'}
      promoGenre={'Drama'}
      promoDate={'2014'}
      films={mockFilms}
      reviews={mockReviews}
    />
  </React.StrictMode>
);
