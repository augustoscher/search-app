const { gql } = require('@apollo/client')

const SERIE_QUERY = gql`
  query SerieQuery {
    series {
      id
      name
      year
      director {
        name
        country
      }
    }
  }
`

export default SERIE_QUERY
