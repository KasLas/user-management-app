import React, { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";

const StyledForm = styled.form`
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredUserAge);
  };

  return (
    <Card>
      <StyledForm onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          value={enteredUserName}
          onChange={nameInputChangeHandler}
        />
        <label htmlFor="userAge">Age (Years)</label>
        <input
          id="userAge"
          type="number"
          value={enteredUserAge}
          onChange={ageInputChangeHandler}
        />
        <Button type="submit" buttonText="Add User" />
      </StyledForm>
    </Card>
  );
};

export default AddUser;
