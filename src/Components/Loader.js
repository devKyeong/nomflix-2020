import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 20px;
`;

const Loader = () => (
  <Container>
    <span role="img" ara-label="Loading">
      🎴🎴
    </span>
  </Container>
);

export default Loader;
