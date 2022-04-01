const { gql } = require('@apollo/client');

const POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      id
      author
      title
      body
    }
  }
`;

export default POSTS_QUERY;
