import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ViewCardContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Breadcrumb = styled.nav`
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  padding: 15px;
  align-items: center;
`;

export const BreadcrumbLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 10px;
  color: #555;
`;

export const CardDetailText = styled.div`
  margin-top: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 1rem 0;
  padding: 0.75rem 1.5rem;
  border: 2px solid #007bff;
  border-radius: 5px;
  text-decoration: none;
  color: #007bff;
  
  transition: background-color 0.3s, color 0.3s;
  margin-right: 5px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;