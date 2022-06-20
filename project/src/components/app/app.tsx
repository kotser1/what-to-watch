import Home from '../home/home';

type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoDate: string;
};

function App({ promoTitle, promoGenre, promoDate }: AppProps): JSX.Element {
  return (
    <Home
      promoFilmTitle={promoTitle}
      promoFilmGenre={promoGenre}
      promoFilmReleaseDate={promoDate}
    />
  );
}

export default App;
