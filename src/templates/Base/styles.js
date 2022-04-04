import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  flex: 1 0 auto;
  padding: 1.6rem 0;
  width: 80%;
  margin: 0 auto;
`

export const SectionFooter = styled.section`
  background-color: #fff;

  ${media.greaterThan('medium')`
    /* padding-top: calc(5.6 * 2); */
    /* clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%); */
  `}
`
