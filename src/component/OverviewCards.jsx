import React from "react";
import styled from "styled-components";

const OverviewCards = () => {
  return (
    <CardsMain>
      <Card>
        <h6>posts</h6>
        <h4>2,390</h4>
        <div className="percentage">
          <p>4.7%</p>
        </div>
      </Card>
      <Card>
        <h6>pages</h6>
        <h4>182</h4>
        <div className="percentage">
          <p>12.4%</p>
        </div>
      </Card>
      <Card>
        <h6>comments</h6>
        <h4>8,147</h4>
        <div className="percentage">
          <p>3.8%</p>
        </div>
      </Card>
      <Card>
        <h6>users</h6>
        <h4>2,413</h4>
        <div className="percentage">
          <p>12.4%</p>
        </div>
      </Card>
      <Card>
        <h6>subscribers</h6>
        <h4>17,281</h4>
        <div className="percentage">
          <p>2.4%</p>
        </div>
      </Card>
    </CardsMain>
  );
};

export default OverviewCards;

const CardsMain = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;

  h6 {
    text-transform: uppercase;
    color: #a2a2a2;
    font-weight: 400;
    font-size: 14px;
  }
  h4 {
    font-weight: 500;
    font-size: 30px;
  }
  .percentage {
    p {
      color: green;
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
