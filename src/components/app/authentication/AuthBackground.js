import Img from "gatsby-image"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function AuthBackground() {
  // noinspection JSUnresolvedVariable
  return (
    <StaticQuery
      query={graphql`
        query {
          authBackground: file(relativePath: { eq: "min/authBackground.jpg" }) {
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
      render={data => <Img fluid={data.authBackground.childImageSharp.fluid} />}
    />
  )
}
