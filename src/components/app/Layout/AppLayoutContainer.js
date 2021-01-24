import React, { useEffect, useState } from "react"

import AuthBox from "../Authentication/AuthBox"
import AuthBackground from "../authentication/AuthBox/AuthBackground"

function ChildrenWrapper({ location, children, user, setUser }) {
  return (
    <>

        <AuthBackground />
        <AuthBox mode={"signin"} />

    </>
  )
}

export default ChildrenWrapper
