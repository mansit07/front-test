import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteCard, viewCard } from '../lib/collection';
import { Card as CardType } from '../lib/collection';
import { Breadcrumb, BreadcrumbLink, BreadcrumbSeparator, Button, CardDetailText, CardDetails, CardImage, ViewCardContainer } from './ViewCardCss';

const ViewCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [card, setCard] = useState<CardType | null>(null);
  const history = useHistory();
  
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const cardResponse = await viewCard(id);
        setCard(cardResponse);
        setLoading(false);
      } catch (error) {
        setError('Error fetching card');
        setLoading(false);
      }
    };

    fetchCard();
  }, [id,]);

  const handleDelete= async()=>{
    console.log("delete");
    try {
        await deleteCard(id);
        alert('Card deleted successfully!');
        history.push('/collection');
      } catch (error) {
        setError('Error deleting card');
      }
  }
  const formattedDOB = (dob: string):  string => {
    const date = new Date(dob);
    const month = date.toLocaleDateString('en-GB', { month: 'short' });
    const formattedDate = `${date.getDate()} ${month} ${date.getFullYear()}`;
    return formattedDate;
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = 'https://via.placeholder.com/150'; // Fallback image URL
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <Breadcrumb className="breadcrumb">
        <BreadcrumbLink to="/">Home</BreadcrumbLink> <BreadcrumbSeparator >&gt;</BreadcrumbSeparator> <BreadcrumbLink to="/collection">Collection</BreadcrumbLink> <BreadcrumbSeparator>&gt;</BreadcrumbSeparator> <BreadcrumbSeparator>Edit User</BreadcrumbSeparator>
      </Breadcrumb>
    <ViewCardContainer className="view-card-container">
      
      <h1>View Card</h1>
      <CardDetails className="card-details">
        <CardImage
          src={card?.player.image || 'https://via.placeholder.com/150'}
          alt={`${card?.player.firstname} ${card?.player.lastname}`}
          width="150"
          onError={handleImageError}
        />
        <CardDetailText>
          <strong>{card?.player.firstname} {card?.player.lastname}</strong>
        </CardDetailText>
        <CardDetailText>Birthdate: {formattedDOB(card?.player.birthday || '')}</CardDetailText>
      </CardDetails>
      <Link to={`/edit-user/${card?.id}`}> 
        <Button className='button'>Edit Details</Button>
      </Link>
      <Button className='button' onClick={handleDelete}>Delete Card</Button>
    </ViewCardContainer>
    </>
  );
};

export default ViewCard;
