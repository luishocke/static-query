import React from "react"
import AppLayoutContainer from "./AppLayoutContainer"


function AppLayout({ children }) {
  return (
      <AppLayoutContainer>{children}</AppLayoutContainer>
  )
}
export default AppLayout
