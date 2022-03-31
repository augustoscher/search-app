import styled from 'styled-components';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Box = styled.div`
  background-color: gray;
  height: 300px;
  width: 300px;
`;

export const Description = styled.div`
  text-align: center;
`;
