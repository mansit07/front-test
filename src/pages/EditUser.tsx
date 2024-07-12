import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { editCard, Card as CardType } from '../lib/collection';
import { Breadcrumb, EditUserContainer, EditUserForm } from './EditUserCss';


const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [playerFirstName, setPlayerFirstName] = useState<string>('');
  const [playerLastName, setPlayerLastName] = useState<string>('');
  const [playerBirthday, setPlayerBirthday] = useState<string>('');
  const [playerImage, setPlayerImage] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        // Fetch the existing card data to populate the form
        const response = await fetch(`http://localhost:8001/cards/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch card');
        }
        const cardData: CardType = await response.json();
        setPlayerFirstName(cardData.player.firstname);
        setPlayerLastName(cardData.player.lastname);
        setPlayerBirthday(cardData.player.birthday);
        setPlayerImage(cardData.player.image);
        setLoading(false);
      } catch (error) {
        setError('Error fetching card');
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const updatedCard: CardType = {
      id: Number(id),
      player: {
        firstname: playerFirstName,
        lastname: playerLastName,
        birthday: playerBirthday,
        image: playerImage,
      },
    };

    try {
      await editCard(id, updatedCard);
      alert('Card updated successfully!');
      history.push(`/view-card/${id}`); // Redirect to view card page after update
    } catch (error) {
      setError('Error updating card');
    }
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
        <Link to="/">Home</Link> <span>&gt;</span> <Link to="/collection">Collection</Link> <span>&gt;</span> <span>Edit User</span>
      </Breadcrumb>
    <EditUserContainer className="edit-user-container">
      
      <h1>Edit User</h1>
      <EditUserForm className="edit-user-form" onSubmit={handleFormSubmit}>
        <label>
          <span>First Name:</span>
          <input
            type="text"
            value={playerFirstName}
            onChange={(e) => setPlayerFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Last Name:</span>
          <input
            type="text"
            value={playerLastName}
            onChange={(e) => setPlayerLastName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Birthday:</span>
          <input
            type="date"
            value={playerBirthday}
            onChange={(e) => setPlayerBirthday(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Image URL:</span>
          <input
            type="url"
            value={playerImage}
            onChange={(e) => setPlayerImage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save Changes</button>
      </EditUserForm>
    </EditUserContainer>
    </>
  );
};

export default EditUser;
