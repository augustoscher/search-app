import debounce from 'lodash.debounce'

import useFetch from 'hooks/UseFetch'
import { FIND_POSTS_QUERY } from 'graphql/queries/posts'
import Base from '../../templates/Base'
import List, { ListItem } from '../../components/List'
import Input, { InputWrapper } from 'components/Input'

import * as S from './styles'

const Posts = () => {
  const { data, isLoading, isError, setVariables } = useFetch({
    initialQuery: FIND_POSTS_QUERY,
    initialVariables: {},
    initialData: []
  })

  const { findPosts: posts = [] } = data

  const handleChange = debounce((value) => {
    setVariables({ queryTerm: value })
  }, 500)

  return (
    <Base>
      <h1>Posts</h1>

      <InputWrapper>
        <Input onChange={(e) => handleChange(e.target.value)} />
      </InputWrapper>

      {isError && <S.Message>Something went wrong ...</S.Message>}

      {isLoading ? (
        <S.Message>Loading ...</S.Message>
      ) : (
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
      )}
    </Base>
  )
}

export default Posts
