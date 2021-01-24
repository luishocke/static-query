import React, { useEffect, useState } from "react"
import SSOProviders from "./SSOProviders"

import handleAuthError from "./handleAuthError"

import RegisterForm from "./RegisterForm"
import SignInForm from "./SignInForm"

export default function AuthBox({ mode = "login" }) {
  // error message, displayed below the password field
  const [message, setMessage] = useState("")
  // Auth box shakes when an error occurs
  const [shaking, setShaking] = useState(false)
  // text strings for button texts etc
  const text = "..:"
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

  return <p> uuu</p>
}
