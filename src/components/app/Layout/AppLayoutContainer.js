import React, { useEffect, useState } from "react"

import { AppBody } from "./styled"
import { AuthBoxWrapper } from "../Authentication/AuthBox/styled"
import AuthBox from "../Authentication/AuthBox"
import AuthBackground from "../authentication/AuthBox/AuthBackground"

function ChildrenWrapper({ location, children, user, setUser }) {
  return (
    <>
      <AuthBoxWrapper>
        <AuthBackground />
        <AuthBox mode={"signin"} />
      </AuthBoxWrapper>
    </>
  )
}

export default ChildrenWrapper
