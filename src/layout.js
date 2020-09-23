import React from "react"
import Helmet from "helmet"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.css"

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
      <div className="navi">
        <div className="constainer">
          <div className="navi-wrapper">
            <LogoLink />
            <div className="navi-link-wrapper">
              {[{ text: "Home", url: "/" }, ...navLinks].map(link => (
                <Link to={link.url} className="navi-links">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="navi-line" />
      </div>
      {children}
      <div id="Footer" className="section footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-info">
              <LogoLink />
              <div className="text-block copyright">
                Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
              </div>
            </div>
            <div className="footer-info">
              <Link to="/terms-of-service#Privacy-Policy" className="link-2">
                Privacy Policy
              </Link>
            </div>
            <div className="footer-info">
              <Link to="/terms-of-service#Terms-of-Services" className="link-2">
                Terms of Services
              </Link>
            </div>
            <div className="footer-info">
              <Link to="https://www.linkedin.com/company/daifoundation">
                <img
                  src="https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f1af3bf039ee3b166bf8e02_5ef0abee113da29ef36c2998_linkedin.svg"
                  alt=""
                  className="image-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
