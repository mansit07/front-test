export interface Card {
  id: number;
  player: {
    firstname: string;
    lastname: string;
    birthday: string;
    image: string;
  };
}

export interface Props {
  card: Card;
  formattedDOB: (dob: string) => string;
  onError: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export interface NewCard {
  player: {
    firstname: string;
    lastname: string;
    birthday: string;
    image: string;
  };
}
const API_URL = 'http://localhost:8001/cards';

export async function fetchCollection() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return await response.json();
}

export async function addCard(newCard: NewCard){
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCard),
  });

  if (!response.ok) {
    throw new Error('Failed to add card');
  }

  const data = await response.json();
  return data;
}

export async function viewCard(id: string){
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch card');
  }
  return await response.json();
}

export async function editCard(id: string, updatedCard: Card) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedCard),
  });
  if (!response.ok) {
    throw new Error('Failed to update card');
  }
}
export async function deleteCard(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete card');
  }
}
