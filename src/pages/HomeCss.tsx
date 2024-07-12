import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: white;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavbarItem = styled.li`
  margin-right: 20px;
`;

export const NavbarLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const Heading = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-top: 75px;
  font-size: 35px
`;
export const Description = styled.span`
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  text-align: center;
  display: block;
  margin: 30px auto;
`;