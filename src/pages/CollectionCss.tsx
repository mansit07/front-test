import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Breadcrumb = styled.nav`
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const BreadcrumbLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 10px;
  color: #555;
`;

export const CollectionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 0;
  list-style-type: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px; 
  }
`;

export const CollectionItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const SortDropdown = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const SortDropdownLabel = styled.label`
  margin-right: 10px;
  padding-top: 7px;
`;

export const SortDropdownSelect = styled.select`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
