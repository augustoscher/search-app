import Base from '../../templates/Base';
import useFetch from 'hooks/UseFetch';
import List, { ListItem } from '../../components/List';
import MOVIE_QUERY from 'graphql/queries/movies';

import * as S from './styles';

const Movies = () => {
  const { data, isLoading, isError } = useFetch({
    initialQuery: MOVIE_QUERY,
    initialData: [],
  });

  const { movies = [] } = data;

  return (
    <Base>
      <h1>Movies</h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <List>
          {movies.map((item) => (
            <ListItem key={item.id}>
              <S.Title>
                {item.name} • {item.year}
              </S.Title>
              <S.Director>
                Directed by: {item.director.name} - {item.director.country}
              </S.Director>
              <S.Producers>
                Produced by:{' '}
                {item.producers.map((prod, idx) => (
                  <span key={idx}>
                    {prod.name}
                    {idx < item.producers.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </S.Producers>
            </ListItem>
          ))}
        </List>
      )}
    </Base>
  );
};

export default Movies;
