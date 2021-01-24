import styled from 'styled-components';


export const Header = styled.div`
  display: flex;
  justify-content: center;

`;

export const AppNav = styled.ul`
  display: flex;
  flex-direction: row;



  padding: 0;
  margin: 0;

  list-style: none;

  li {
    display: flex;
    align-items: center;

    cursor: pointer;

   

    a {
      display: flex;
      align-items: center;


      text-decoration: none;
      color: black;
      font-weight: 500;

      text-transform: capitalize;

    }
  }

  * + * {


    a {
      &:hover,
      &:focus {
       
      }
    }
  }

  .pathActive {
   
  }

  .logo {
    a {
      font-family: 'Playfair Display', serif;

      font-weight: 400 !important;
    }
  }

  .select {
   
  }

  .account {
    margin: 0 0 0 auto;
  }

  svg {
    width: 20px;
    height: 20px;
   
  }

  
`;
