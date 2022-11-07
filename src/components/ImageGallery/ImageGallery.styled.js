import styled from 'styled-components';
export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 16px auto 0px;
  padding: 0px;
  list-style: none;

  li {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 260px;
    display: flex;
    object-fit: cover;
    transition: transform 250ms;
    :hover {
      transform: scale(1.03);
    }
  }
`;
