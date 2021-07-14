import React from "react"
import Helmet from "react-helmet"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./fonts.css"
import LinkedInLogo from "./images/imported/linkedin.svg"
import PageHead from "./components/PageHead"
import { Box, ThemeProvider } from "theme-ui"

import theme from './theme'


export default function Layout({ navLinks = [], children }) {
  return (
    <div>
      <PageHead
        title="Dai Foundation"
        description="An independent legal entity for safeguarding the Maker community’s intellectual property."
      />
      <Helmet>
        {
          ['Bold', 'BoldItalic', 'Italic', 'Regular'].map(fontType => {
            const extensions = ['woff', 'woff2']
            return extensions.map(ext => (<link
              rel="preload"
              as="font"
              href={`/fonts/Acumin Pro/AcuminPro-${fontType}.${ext}`}
              type={`font/${ext}`}
              crossOrigin="anonymous"
            />) )
          })
        }
      </Helmet>
      <ThemeProvider theme={theme}>
        <div>
          <div>
            <div>
              <Link to="/">
                Home
              </Link>
              {navLinks}
            </div>
          </div>
        </div>
        {children}
        <div id="Footer">
          <div>
            <div>
              <Box sx={{ marginTop: "10px" }}>
                <Box sx={{ marginTop: "18px" }}>
                  Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
                </Box>
              </Box>
              <div>
                <Link to="/terms-of-service#Terms-of-Service">
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
      </ThemeProvider>
    </div>
  )
}
