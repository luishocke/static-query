import React, { useEffect, useState } from "react"
import { AuthBoxRoot, AuthBoxMessage, SSOContainer } from "./styled"
import SSOProviders from "./SSOProviders"

import handleAuthError from "./handleAuthError"
import { AuthBoxText } from "./authBoxText"

import RegisterForm from "./RegisterForm"
import SignInForm from "./SignInForm"

export default function AuthBox({ mode = "login" }) {
  // error message, displayed below the password field
  const [message, setMessage] = useState("")
  // Auth box shakes when an error occurs
  const [shaking, setShaking] = useState(false)
  // text strings for button texts etc
  const text = AuthBoxText(mode)
  // this holds the form fields
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  function signIn(event) {
    event.preventDefault()
  }

  function register(event) {
    event.preventDefault()

    if (!validatePassword()) {
      setMessage("The passwords don't match")
      setShaking(true)
      return
    }
  }

  /* checks if passwords match */
  function validatePassword(event) {
    // check before submit
    if (!event) {
      return state.password === state.confirmPassword
    }

    // check during input
    event.persist()
    if (event.target.value !== state.password) {
      setMessage("The passwords don't match")
      return false
    } else {
      setMessage("")
      return true
    }
  }

  useEffect(() => {
    window.setTimeout(() => {
      setShaking(false)
    }, 1000)
  }, [shaking])

  return (
    <AuthBoxRoot id={"signInBox"} animate={shaking}>
      <AuthBoxMessage>
        <span>{text.authText} </span>
      </AuthBoxMessage>
      {/* display either register form or sign in form based on mode */}
      {mode === "register" ? (
        <RegisterForm
          register={register}
          message={message}
          text={text}
          state={state}
          setState={setState}
          validatePassword={validatePassword}
        />
      ) : (
        <SignInForm
          signIn={signIn}
          message={message}
          text={text}
          state={state}
          setState={setState}
        />
      )}

      {/* contains third party sign ins */}

    </AuthBoxRoot>
  )
}
