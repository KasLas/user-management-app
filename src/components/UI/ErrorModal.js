import React, { Fragment } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  max-width: 40rem;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const StyledHeader = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

const StyledDiv = styled.div`
  padding: 1rem;
`;

const StyledFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalBackDrop = (props) => {
  return <BackDrop onClick={props.onErrorClose} />;
};

const ErrorOverlay = (props) => {
  return (
    <StyledCard>
      <StyledHeader>
        <h2>{props.header}</h2>
      </StyledHeader>
      <StyledDiv>
        <p>{props.message}</p>
      </StyledDiv>
      <StyledFooter>
        <Button buttonText="Okay" onClick={props.onErrorClose} />
      </StyledFooter>
    </StyledCard>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalBackDrop onErrorClose={props.onErrorClose} />,
        document.getElementById("modal-backdrop")
      )}
      {ReactDom.createPortal(
        <ErrorOverlay
          header={props.header}
          message={props.message}
          onErrorClose={props.onErrorClose}
        />,
        document.getElementById("modal-overlay")
      )}
    </Fragment>
  );
};

export default ErrorModal;
