const { gql } = require('@apollo/client');

const MOVIE_QUERY = gql`
  query MoviesQuery {
    movies {
      id
      name
      year
      director {
        name
        country
      }
      producers {
        name
      }
    }
  }
`;

export default MOVIE_QUERY;
