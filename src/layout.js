import React from "react"
import Helmet from "react-helmet"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.css"
import LinkedInLogo from "./images/imported/linkedin.svg"
import PageHead from "./components/PageHead"
import { Box } from "theme-ui"

const LogoLink = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Dai_foundation_colour.png" }) {
        childImageSharp {
          fixed(width: 251, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Link to="/">
      <Img fixed={data.file.childImageSharp.fixed} alt="Dai Foundation"/>
    </Link>
  )
}

export default function Layout({ navLinks = [], scrollToHash, children }) {
  if (!scrollToHash) {
    // Use propTypes if more props are required; this would suffice for now.
    throw new Error('scrollToHash prop is required in Layout component')
  }
  return (
    <div>
      <PageHead
        title="Dai Foundation"
        description="An independent legal entity for safeguarding the Maker community’s intellectual property."
      />
      <Helmet>

      </Helmet>
      <Header>
        <div className="container">
          <div className="navi-wrapper">
            <LogoLink />
            <div className="navi-link-wrapper">
              <Link to="/" className="navi-link">
                Home
              </Link>
              {navLinks}
            </div>
          </div>
        </div>
      </Header>
      {children}
      <div id="Footer" className="section footer">
        <div className="container">
          <div className="footer-wrapper">
            <Box sx={{ marginTop: "10px" }}>
              <LogoLink />
              <Box sx={{ marginTop: "18px" }}>
                Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
              </Box>
            </Box>
            <div>
              <Link to="/terms-of-service#Terms-of-Service" className="link-2">
                Terms of Service
              </Link>
            </div>
            <Box sx={{ pt: "19px" }}>
              <a
                href="https://www.linkedin.com/company/daifoundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogo width="28px" height="28px" />
              </a>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}
