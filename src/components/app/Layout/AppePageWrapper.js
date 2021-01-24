import styled from 'styled-components';

import React from 'react';


const AppPage = styled.section`
  display: flex;
  flex-direction: column;

`;

const AppBody = styled.div`
  background-color: white;
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;


  font-weight: 300;


  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    align-self: flex-end;
    height: 32px;
    width: 32px;
    cursor: pointer;
    border: none;

    color: white;
   
  }
`;

export default function AppPageWrapper({ children, width, title }) {
  return (
    <AppPage width={width}>
      <Title>{title}</Title>
      <AppBody>{children}</AppBody>
    </AppPage>
  );
}
