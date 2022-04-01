import Base from '../../templates/Base';
import useFetch from 'hooks/UseFetch';
import SERIE_QUERY from 'graphql/queries/series';
import List, { ListItem } from '../../components/List';

import * as S from './styles';

const Series = () => {
  const { data, isLoading, isError } = useFetch({
    initialQuery: SERIE_QUERY,
    initialData: [],
  });

  const { series = [] } = data;

  return (
    <Base>
      <h1>Series</h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <List>
          {series.map((item) => (
            <ListItem key={item.id}>
              <S.Title>
                {item.name} • {item.year}
              </S.Title>
              <S.Director>
                Directed by: {item.director.name} - {item.director.country}
              </S.Director>
            </ListItem>
          ))}
        </List>
      )}
    </Base>
  );
};

export default Series;
