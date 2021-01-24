import styled, { keyframes } from "styled-components"

import { css } from "styled-components"

// Create the keyframes
export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(4px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-8px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(8px, 0, 0);
  }
`

export const AuthBoxWrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const AuthBoxRoot = styled.div`
  animation: ${props =>
    props.animate
      ? css`
          ${shake} 1s linear infinite
        `
      : "none"};

  //border-style: solid;
  border-width: 1px;
  border-color: hsl(0, 0%, 70%);

  background-color: white;
`

export const AuthBoxMessage = styled.div``

// box-shadow: hsl(0, 0%, 70%) 0px 4px 8px 0px;

export const AuthBoxForm = styled.form`
  background-color: white;

  .row {
    display: flex;
    flex-direction: column;

    .labelRow {
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
      }
    }

    input {
      width: 100%;
      box-sizing: border-box;

      border-style: solid;
      border-width: 1px;
    }
  }

  .message {
    display: flex;
    align-items: center;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .signInButton {
    width: 100%;

    cursor: pointer;
    color: white;

    border-style: none;

    &:hover,
    &:focus {
      color: white;
    }
  }
`

export const SSOContainer = styled.div`
  display: flex;
  flex-direction: column;

  .textRow {
    display: flex;
    align-items: center;
  }

  .line {
    border-style: solid none none none;

    border-width: 1px;
    height: 1px;
    width: 100%;
  }

  .text {
    white-space: nowrap;
  }
`

export const TwitterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;

  height: 50px;

  border-style: none;
  background-color: #1da1f2;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  img {
    width: 36px;
    height: 36px;
    padding: 6px;
  }

  span {
    margin: auto auto auto 0;

    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    font-family: "Roboto", sans-serif;
    color: white;
  }
`

export const SSOWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * + * {
  }

  .googleButton,
  .twitterButton {
    width: 210px !important;

    text-align: initial !important;
    &:hover,
    &:focus {
      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2),
        0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
    }
  }
`
