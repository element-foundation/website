import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import "./fonts.css"
import LinkedInLogo from "./images/imported/linkedin.svg"
import PageHead from "./components/PageHead"
import { Box, Flex, ThemeProvider } from "theme-ui"
import content from "./content.json"

import theme from './theme'

const navTitles = content.common.nav

const tabLinks = [
  {
    title: navTitles.about,
    url: '/'
  },
  {
    title: navTitles.mandate,
    url: '/mandate'
  },
  {
    title: navTitles.principles,
    url: '/principles'
  },
  {
    title: navTitles.board,
    url: '/board'
  },
  {
    title: navTitles.assets,
    url: '/assets'
  }
]

export default function Layout({ children, tabPage, surfaceColor }) {
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
        <Box>
          <Flex>
            <Box>(logo and site name)</Box>
            <Box>(top right nav)</Box>
          </Flex>
          <Box>
            {tabLinks.map(link => <Link to={link.url}>
                {link.title}{link.title.toLowerCase() === tabPage ? '*' : ''}
              </Link>)
            }
          </Box>
        </Box>
        <Box sx={{backgroundColor: `surface.${surfaceColor || 'gray'}`}}>
          {children}
        </Box>
        <div id="Footer">
          <div>
            <div>
              <Box sx={{ marginTop: "10px" }}>
                <Box sx={{ marginTop: "18px" }}>
                  {content.common.licence}
                </Box>
              </Box>
              <div>
                <Link to="/terms-of-service#Terms-of-Service">
                  {navTitles["terms-of-service"]}
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
