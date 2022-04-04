import PropTypes from 'prop-types'

import * as S from './styles'

const List = ({ children }) => <S.List>{children}</S.List>
export const ListItem = ({ children }) => <S.ListItem>{children}</S.ListItem>

List.propTypes = {
  children: PropTypes.node.isRequired
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired
}

export default List
