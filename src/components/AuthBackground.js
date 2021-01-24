import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"



const Background = ({ data }) => (
  <Img
    fluid={data.authBackground.childImageSharp.fluid}
  />

)

function AuthBackground() {
  // noinspection JSUnresolvedVariable
  return ( <StaticQuery
    query={graphql`
      query {
        authBackground: file(relativePath: { eq: min/authBackground.jpg" }) {
          childImageSharp {
            fluid(
              maxWidth: 1000
              duotone: { highlight: "#b699ff", shadow: "#000000" }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Background data={data} />}
  />)
}
