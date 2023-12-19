import React from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Dashboard from "../component/Dashboard";

const Home = () => {
  return (
    <Container>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <Dashboard />
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 0;
`;
