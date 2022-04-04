const { gql } = require('@apollo/client')

export const POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      id
      author
      title
      body
    }
  }
`

export const FIND_POSTS_QUERY = gql`
  query FindPostQuery($queryTerm: String) {
    findPosts(queryTerm: $queryTerm) {
      id
      title
      author
      body
    }
  }
`
