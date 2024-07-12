import styled from 'styled-components';

export const CollectionItem = styled.div`
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CollectionItemImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 3px;
`;
