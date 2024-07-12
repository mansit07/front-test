import styled from 'styled-components';

export const CreateCardContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;

  h1 {
    text-align: center;
    font-size: 1.5em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 20px;
  }
`;

export const Breadcrumb = styled.nav`
  padding: 25px;
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin: 0 10px;
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 5px;
  }

  @media (max-width: 480px) {
    margin-right: 5px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    margin-top: 6px;
  }
`;