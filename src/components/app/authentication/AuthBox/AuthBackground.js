import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const BackgroundSC = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`

const Background = ({ data }) => (
  // <BackgroundSC draggable={false}>
  <Img
    // draggable={false}
    // style is applied to the wrapper element
    // style={{
    //   top: "0px",
    //   left: "0px",
    //   height: "102vh",
    //   width: "102vw",
    //   marginLeft: "-1vw",
    //   marginTop: "-1vh",
    //   zIndex: "-1",
    // }}
    // imgStyle is applied to the actual img element
    // imgStyle={{ opacity: "0.3", filter: "blur(8px)" }}
    fluid={data.authBackground.childImageSharp.fluid}
  />
  // </BackgroundSC>
)

export default function AuthBackground() {
  // noinspection JSUnresolvedVariable
  return sq
}

const sq = (
  <StaticQuery
    query={graphql`
      query {
        authBackground: file(relativePath: { eq: "min/paint.jpg" }) {
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
  />
)
