import React from "react"
import Helmet from "helmet"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.css"
import LinkedInLogo from './images/imported/linkedin.svg'
import { Box } from 'theme-ui'
import styled from 'styled-components'

const Header = styled(Box)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  .navi-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navi-link-wrapper {
    padding-bottom: 6px;
  }
  
  .navi-link {
    margin-right: 10px;
    margin-left: 10px;
    font-family: Mukta, sans-serif;
    text-decoration: none;
  }
  
  @media screen and (max-width: 767px) {
    .navi-link-wrapper {
      display: none;
    }
  }
`

export default function Layout({ navLinks = [], children }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Dai_foundation_colour.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const LogoLink = () => (
    <Link to="/">
      <Img fixed={data.file.childImageSharp.fixed} alt="Dai Foundation" />
    </Link>
  )

  return (
    <div>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href="/fonts/Mukta/Mukta-Regular.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/Mukta/Mukta-Regular.woff"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/Mukta/Mukta-Bold.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/Mukta/Mukta-Bold.woff"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header>
        <div className="container">
          <div className="navi-wrapper">
            <LogoLink />
            <div className="navi-link-wrapper">
              {[{ text: "Home", url: "/" }, ...navLinks].map(link => (
                <Link to={link.url} className="navi-link">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Header>
      {children}
      <div id="Footer" className="section footer">
        <div className="container">
          <div className="footer-wrapper">
            <Box sx={{marginTop: '10px'}}>
              <LogoLink />
              <Box sx={{marginTop: '18px'}}>
                Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
              </Box>
            </Box>
            <div>
              <Link to="/terms-of-service#Privacy-Policy" className="link-2">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link to="/terms-of-service#Terms-of-Services" className="link-2">
                Terms of Services
              </Link>
            </div>
            <Box sx={{pt: '19px'}}>
              <a href="https://www.linkedin.com/company/daifoundation" target="_blank" rel="noopener noreferrer">
                <LinkedInLogo width="28px" height="28px" />
              </a>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}
