import React from 'react';
import { Description, Heading, NavbarContainer, NavbarItem, NavbarLink, NavbarList } from './HomeCss';

const Home: React.FC = () => {
  return (
    <>
      <NavbarContainer className="navbar">
        <NavbarList className="navbar-list">
          <NavbarItem className="navbar-item">
            <NavbarLink to="/collection">Collections</NavbarLink>
          </NavbarItem>
          <NavbarItem className="navbar-item">
            <NavbarLink to="/create-card">Create Card</NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarContainer>
      <Heading className="heading">Welcome to Collections Grid</Heading>
      <Description>Explore our curated collection of player cards from various leagues and tournaments. Whether you're here to view your favorite players' profiles, create custom cards, or manage your collection, you'll find everything you need right here. Dive into the world of sports with our comprehensive player database and enjoy the experience of building your own collection.</Description>
    </>
  );
};

export default Home;
