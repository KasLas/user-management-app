import React, { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

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
  const [error, setError] = useState();

  const nameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    // Input validation
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        header: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        header: "Invalid Age",
        message: "Please enter a age greater than 0.",
      });
      return;
    }
    const inputData = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredUserAge,
    };
    props.onFormSubmit(inputData);

    console.log(enteredUserName, enteredUserAge);

    // reset input values
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const errorCloseHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          header={error.header}
          message={error.message}
          onErrorClose={errorCloseHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
