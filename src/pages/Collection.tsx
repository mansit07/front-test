import React, { useState, useEffect } from 'react';
import { fetchCollection, Card as CardType } from '../lib/collection';
import Card from './Card';
import { Breadcrumb, BreadcrumbLink, BreadcrumbSeparator, CollectionItem, CollectionList, Container, SortDropdown, SortDropdownLabel, SortDropdownSelect, Title } from './CollectionCss';

const Collection: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cards, setCards] = useState<CardType[]>([]);
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cardsResponse = await fetchCollection();
        setCards(cardsResponse);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  const formattedDOB = (dob: string): string => {
    const date = new Date(dob);
    const month = date.toLocaleDateString('en-GB', { month: 'short' });
    const formattedDate = `${date.getDate()} ${month} ${date.getFullYear()}`;
    return formattedDate;
  };

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = 'https://via.placeholder.com/150'; 
  };

  const sortCards = (option: string) => {
    let sortedCards: CardType[] = [...cards];
    switch (option) {
      case 'dob':
        sortedCards.sort(
          (a, b) =>
            new Date(a.player.birthday).getTime() -
            new Date(b.player.birthday).getTime()
        );
        break;
      case 'firstname':
        sortedCards.sort((a, b) =>
          a.player.firstname.localeCompare(b.player.firstname)
        );
        break;
      case 'lastname':
        sortedCards.sort((a, b) =>
          a.player.lastname.localeCompare(b.player.lastname)
        );
        break;
      default:
        sortedCards = [...cards];
        break;
    }
    return sortedCards;
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSortBy(selectedOption);
  };

  const sortedCards = sortBy ? sortCards(sortBy) : cards;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>
        <span>Collections</span>
      </Breadcrumb>
      <Title>Collection</Title>
      <SortDropdown className="sort-dropdown">
        <SortDropdownLabel>Sort by:</SortDropdownLabel>
        <SortDropdownSelect
          id="sort-select"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="">Select...</option>
          <option value="dob">DOB</option>
          <option value="firstname">First Name</option>
          <option value="lastname">Last Name</option>
        </SortDropdownSelect>
      </SortDropdown>
      <CollectionList className="collection-list">
        {sortedCards.map((card) => (
          <CollectionItem key={card.id} className="collection-item">
            <Card
              card={card}
              formattedDOB={formattedDOB}
              onError={handleImageError}
            />
          </CollectionItem>
        ))}
      </CollectionList>
    </Container>
  );
};
export default Collection;
