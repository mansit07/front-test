import styled from 'styled-components';

export const EditUserContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }
`;

export const EditUserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
    display: flex;
    align-items: center;

    > span {
      flex: 0 0 120px;
    }
  }

  input[type="date"] {
    width: 180px;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007BFF;
      outline: none;
    }
  }

  input[type="text"],
  input[type="url"] {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007BFF;
      outline: none;
    }
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
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
`;