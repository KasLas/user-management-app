import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const StyledList = styled.ul`
  list-style: none;
  padding: 1rem;

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

const UserList = (props) => {
  return (
    <Card>
      <h2>User List</h2>
      <StyledList>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age}, years old)
            </li>
          );
        })}
      </StyledList>
    </Card>
  );
};

export default UserList;
