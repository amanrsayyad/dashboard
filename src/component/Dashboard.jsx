import React from "react";
import styled from "styled-components";
import OverviewCards from "./OverviewCards";
import PageTitle from "./PageTitle";
import Analytics from "./Analytics";

const Dashboard = () => {
  return (
    <DashboradMain>
      <PageTitle pageTitle="dashboard" featureTitle="Blog Overview"  />
      <OverviewCards />
      <Analytics />
    </DashboradMain>
  );
};

export default Dashboard;

const DashboradMain = styled.div`
  padding: 20px 30px;
  background-color: #F4F8FB;
`;


