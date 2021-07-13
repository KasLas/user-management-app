import React from "react";
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

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    alert("submitted");
  };

  return (
    <Card>
      <StyledForm onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input id="userName" type="text" />
        <label htmlFor="userAge">Age (years)</label>
        <input id="userAge" type="number" />
        {/* <button type="submit">Add User</button> */}
        <Button type="submit" buttonText="Add User" />
      </StyledForm>
    </Card>
  );
};

export default AddUser;
