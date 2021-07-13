import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;

const Card = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Card;
