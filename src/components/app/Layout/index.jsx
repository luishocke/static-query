import React from "react"
import AppLayoutContainer from "./AppLayoutContainer"


function AppLayout({ children, location }) {
  return (
      <AppLayoutContainer location={location}>{children}</AppLayoutContainer>
  )
}
export default AppLayout
