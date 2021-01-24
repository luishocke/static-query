import styled from 'styled-components';
import React from 'react';

export const AppPage = styled.div`

  
  box-sizing: content-box;
  margin: 0 auto;



`;

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding: 2% 0 1.4% 0;
  margin: 0 auto;

  h2 {
    margin: 0;
    font-weight: 300;

  }

  button {
    display: ${props => (props.ctaExists ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;

    text-decoration: none;

    cursor: pointer;
    border: none;
   
    color: white;

  }
`;

export function AppPageHeader({
  title,
  ctaExists = false,
  ctaText,
  onCtaClick,
  children,
}) {
  return (
    <HeaderStyle ctaExists={ctaExists}>
      <h2>{title || children}</h2>
      <button onClick={onCtaClick}>{ctaText}</button>
    </HeaderStyle>
  );
}
