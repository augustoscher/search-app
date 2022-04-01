import { useEffect, useState } from 'react';

import client from '../../graphql';
import POSTS_QUERY from 'graphql/queries/posts';
import Base from '../../templates/Base';
import List, { ListItem } from '../../components/List';

import * as S from './styles';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { data } = await client.query({
          query: POSTS_QUERY,
        });

        setPosts(data.posts);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Base>
      <h1>Posts</h1>

      {isError && <div>Error...</div>}
      {isLoading && <div>Loading...</div>}

      <List>
        <S.Grid>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <S.PostWrapper>
                <S.Box></S.Box>
                <S.Description>
                  <p>{post.title}</p>
                  <p>{post.author}</p>
                </S.Description>
              </S.PostWrapper>
            </ListItem>
          ))}
        </S.Grid>
      </List>
    </Base>
  );
};

export default Posts;
