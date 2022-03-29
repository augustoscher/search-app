import PropTypes from 'prop-types'

import Footer from '../../components/Footer'
import * as S from './styles'

const Base = ({ children }) => (
  <S.Wrapper>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Footer />
    </S.SectionFooter>
  </S.Wrapper>
)

Base.propTypes = {
  children: PropTypes.node,
};

export default Base
