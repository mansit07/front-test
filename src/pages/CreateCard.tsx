import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addCard } from '../lib/collection';
import { Breadcrumb, Button, CreateCardContainer, ErrorMessage, Input, Label } from './CreateCardCss'

interface NewCard {
  player: {
    firstname: string;
    lastname: string;
    birthday: string;
    image: string;
  };
}

const CreateCard: React.FC = () => {
  const [playerFirstName, setPlayerFirstName] = useState<string>('');
  const [playerLastName, setPlayerLastName] = useState<string>('');
  const [playerBirthday, setPlayerBirthday] = useState<string>('');
  const [playerImage, setPlayerImage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!playerFirstName) {
      setError('First Name is required.');
      return;
    }
    if (!playerLastName) {
      setError('Last Name is required.');
      return;
    }
    if (!playerBirthday) {
      setError('DOB is required.');
      return;
    }
    if (!playerImage) {
      setError('Image is required.');
      return;
    }

    try {
      const newCard: NewCard = {
        player: {
          firstname: playerFirstName,
          lastname: playerLastName,
          birthday: playerBirthday,
          image: playerImage,
        },
      };

      await addCard(newCard);

      setPlayerFirstName('');
      setPlayerLastName('');
      setPlayerBirthday('');
      setPlayerImage('');
      setError(null);

      alert('Card created successfully!');
      history.push('/collection');
    } catch (error) {
      setError('Error creating card');
    }
  };

  return (
    <>
      <Breadcrumb className="breadcrumb">
        <Link to="/">Home</Link> <span>&gt;</span> <span>Collections</span>
      </Breadcrumb>
      <CreateCardContainer className="create-card-container">
        <h1>Create Card</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <Label>First Name:</Label>
            <Input
              type="text"
              value={playerFirstName}
              onChange={(e) => setPlayerFirstName(e.target.value)}
            />
          </div>
          <div>
            <Label>Last Name:</Label>
            <Input
              type="text"
              value={playerLastName}
              onChange={(e) => setPlayerLastName(e.target.value)}
            />
          </div>
          <div>
            <Label>Birthday:</Label>
            <Input
              type="date"
              value={playerBirthday}
              onChange={(e) => setPlayerBirthday(e.target.value)}
            />
          </div>
          <div>
            <Label>Image URL:</Label>
            <Input
              type="url"
              value={playerImage}
              onChange={(e) => setPlayerImage(e.target.value)}
            />
          </div>
          <Button type="submit">Create Card</Button>
        </form>
        {error && <ErrorMessage className="error-message">{error}</ErrorMessage>}
      </CreateCardContainer>
    </>
  );
};

export default CreateCard;
