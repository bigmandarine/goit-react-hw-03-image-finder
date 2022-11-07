import styled from 'styled-components';
export const Item = styled.li`
  cursor: pointer;
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
