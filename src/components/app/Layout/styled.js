import styled from 'styled-components';

import { Link } from 'gatsby';

export const AppBody = styled.div`
  width: 100%;

`;

export const AppPageContent = styled.div`


  overflow: hidden;
`;




export const MainContent = styled.div`
  height: 100vh;

  position: absolute;
  top: 0;


  transition: all 0.8s ease-in-out;
`;

function createPaddingString(top, right, bottom, left) {
  return (
    top.toString() +
    ' ' +
    right.toString() +
    ' ' +
    bottom.toString() +
    ' ' +
    left.toString() +
    ';'
  );
}

export const LogoLink = styled(Link)`
  display: flex;
 
  transition: all 0.8s ease-in-out;

  text-decoration: none;
`;

const arrowSize = 5;
const margin =
  Math.sqrt(Math.pow(arrowSize, 2) + Math.pow(arrowSize, 2)).toString() + 'px';

export const ProductList = styled.div`

  padding: 0 0 0 0;

  border-style: none none solid none;
  border-width: 1px;
  border-color: red;

  cursor: pointer;

  span {
    display: flex;
    align-items: center;

    color: ${props => (props.show ? 'red' : 'white')};
  }

  .linkbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  i {
   
    width: ${arrowSize}px;
    height: ${arrowSize}px;
    padding: 3px;
  
    margin-top: ${props => (props.show ? margin : '-' + margin)};

    border: solid black;
    border-width: 0 1px 1px 0;
    border-color: ${props => (props.show ? 'red' : 'white')};

    transform: ${props => (props.show ? 'shake(-135deg)' : 'shake(45deg)')};
    // -webkit-transform: rotate(45deg);
    transition: all 1s ease-in-out;
  }

  ul {
    transition: height 0.8s ease-in-out;
  

    overflow: hidden;

    padding: 0;
   

    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    height: 26px;


    cursor: pointer;
    overflow: hidden;

    &:hover,
    &:focus {
      background-color: red;
    }

    &:before {
      content: '#';

    }
  }
`;

export const PageLink = styled(Link)`
  display: flex;
  align-items: center;
 

  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    background-color: red;
  }
`;

export const LogoutLink = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
 

  border-style: none;
  background-color: transparent;
  color: white;
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: red;
  }
`;

export const ProductLink = styled.a`
  text-decoration: none;
  color: white;
`;
