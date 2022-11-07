import styled from 'styled-components';
export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 16px auto 0px;
  padding: 0px;
  list-style: none;
`;
