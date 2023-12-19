import React from "react";
import styled from "styled-components";
import PieChart from "./PieChart";
import Graph from "./Graph";

const Analytics = () => {

  return (
    <AnalyticsMain>
      <Card>
        <Graph />
      </Card>
      <Card>
        <PieChart />
      </Card>
    </AnalyticsMain>
  );
};

export default Analytics;

const AnalyticsMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;
