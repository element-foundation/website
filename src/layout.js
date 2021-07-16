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

const FullHeightWrapper = ({ children }) => <Box sx={{ display: 'table', width: '100%', height: '100vh', boxSizing: 'border-box'}}>
  {children}
</Box>

const FixedHeight = ({ children }) => <Box sx={{ display: 'table-row'}}>
  <Box sx={{ display: 'table-cell'}}>
  {children}
  </Box>
</Box>

const FluidHeight = ({ children }) => <Box sx={{ display: 'table-row', height: '100%' }}>
  <Box sx={{ display: 'table-cell'}}>
  {children}
  </Box>
</Box>

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
        <FullHeightWrapper>
          <FixedHeight>
            <Container sx={{ minHeight: '283px', position: 'relative' }}>
              <Flex sx={{
                alignItems: 'center', 
                justifyContent: 'space-between',
                py: '51px',
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
              <Box sx={{ '& > *': { mr: '38px', ':hover': {
                color: 'primary',
                borderBottom: '2px solid #ddd'
              }}, py: '28px', position: 'absolute', bottom: 0 }}>
                {tabPage && tabLinks.map(link => 
                  <Nav href={link.url} sx={link.title.toLowerCase() === tabPage ? { '&, &:hover': {borderBottom: '2.4px solid', borderColor: 'primary'}}:{}}>
                    {link.title}
                  </Nav>)
                }
              </Box>
            </Container>
          </FixedHeight>
          <FluidHeight>
            <Box sx={{backgroundColor: `surface.${surfaceColor || 'gray'}`, py: '55px', height: '100%' }}>
              <Container>
                {children}
              </Container>  
            </Box>
          </FluidHeight>
          <FixedHeight>
            <Box sx={{ backgroundColor: 'surface.lightGray', color: 'onLightGray', py: '28px'}}>
              <Container>
                <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Flex sx={{ alignItems: 'center' }}>
                    <Text sx={{ fontSize: 'xs'}}>{content.common.licence}</Text>
                    <Box sx={{ width: '3px', height: '3px', borderRadius: '50%', background: '#C4C4C4', mx: '12px', position: 'relative', top: '-2px'}} />
                    <Nav href="/terms-of-service#Terms-of-Service" sx={{ color: 'onLightGray', fontSize: 'xs', position: 'relative', top: '-2px' }}>
                      {navTitles["terms-of-service"]}
                    </Nav>
                  </Flex>
                  <Box sx={{ opacity: '0.5' }}>
                    <a
                      href="https://www.linkedin.com/company/daifoundation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInLogo width="28px" height="28px" />
                    </a>
                  </Box>
                </Flex>
              </Container>
            </Box>
          </FixedHeight>
        </FullHeightWrapper>
      </ThemeProvider>
    </div>
  )
}
