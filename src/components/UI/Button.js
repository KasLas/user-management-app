import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  .button:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  return <StyledButton>{props.buttonText}</StyledButton>;
};

export default Button;
