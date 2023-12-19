import React from "react";
import styled from "styled-components";

const PageTitle = (props) => {
  return (
    <TitleContainer>
      <p>{props.pageTitle}</p>
      <h4>{props.featureTitle}</h4>
    </TitleContainer>
  );
};

export default PageTitle;

const TitleContainer = styled.div`
  margin-bottom: 15px;
  p {
    text-transform: uppercase;
    color: #6e6d6d;
    letter-spacing: 3px;
    font-size: 12px;
  }
  h4 {
    color: #00002b;
    font-weight: 500;
    font-size: 25px;
  }
`;
