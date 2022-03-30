import { useEffect, useState } from 'react';

import Base from '../../templates/Base';
import client from '../../graphql';
import MOVIE_QUERY from 'graphql/queries/movies';

import * as S from './styles';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await client.query({
          query: MOVIE_QUERY,
        });

        setMovies(data.movies);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Base>
      <h1>Movies</h1>

      {isLoading && <b>Loading...</b>}
      {isError && <b>ERROR</b>}

      <S.MovieList>
        {movies.map((item) => (
          <S.MovieItem key={item.id}>
            <S.MovieTitle>
              {item.name} • {item.year}
            </S.MovieTitle>
            <S.MovieDirector>
              Directed by: {item.director.name} - {item.director.country}
            </S.MovieDirector>
            <S.MovieProducers>
              Produced by:{' '}
              {item.producers.map((prod, idx) => (
                <span key={idx}>
                  {prod.name}
                  {idx < item.producers.length - 1 ? ', ' : ''}
                </span>
              ))}
            </S.MovieProducers>
          </S.MovieItem>
        ))}
      </S.MovieList>
    </Base>
  );
};

export default Movies;
