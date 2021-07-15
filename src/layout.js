import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import "./fonts.css"
import MainLogo from "./images/imported/logo.svg"
import LinkedInLogo from "./images/imported/linkedin.svg"
import PageHead from "./components/PageHead"
import { Box, Container, Flex, Text, ThemeProvider } from "theme-ui"
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

const Nav = ({href, children, sx}) => <Link to={href} style={{textDecoration: 'none'}}>
  <Text sx={sx} variant="nav">{children}</Text>
</Link>

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
        <Container>
          <Flex sx={{
            alignItems: 'center', 
            justifyContent: 'space-between',
            py: '51px'
          }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Flex sx={{alignItems: 'center'}}>
                <MainLogo style={{ marginRight: '17px'}} />
                <Text variant="logo" sx={{ position: 'relative', top: '2px'}}>The Dai Foundation</Text>
              </Flex>
            </Link>
            <Box sx={{ '& > *': {
                ml: '47px'
              }
            }}>
              <Nav href="/">{navTitles.about}</Nav>
              <Nav href="/donations">{navTitles.donations}</Nav>
              <Nav href="/contact">{navTitles.contact}</Nav>
            </Box>
          </Flex>
          <Box sx={{ '& > *': { mr: '36px' }, pb: '28px' }}>
            {tabPage && tabLinks.map(link => 
              <Nav href={link.url} sx={link.title.toLowerCase() === tabPage ? { '&, &:hover': {borderBottom: '2.4px solid', borderColor: 'primary'}}:{}}>
                {link.title}
              </Nav>)
            }
          </Box>
        </Container>
        <Box sx={{backgroundColor: `surface.${surfaceColor || 'gray'}`, py: '55px'}}>
          <Container>
            {children}
          </Container>
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
