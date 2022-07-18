import styled from "styled-components";

import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

const Home = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Home;
