import PropTypes from 'prop-types'

import * as S from './styles'

const Input = (props) => (
  <S.Input type="text" placeholder="Search..." {...props}></S.Input>
)

export const InputWrapper = ({ children }) => (
  <S.InputWrapper>{children}</S.InputWrapper>
)

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Input
