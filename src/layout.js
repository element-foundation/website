import React, { useState } from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import "./fonts.css"
import MainLogo from "./images/imported/logo.svg"
import LinkedInLogo from "./images/imported/linkedin.svg"
import MenuOpen from "./images/imported/menu-open.svg"
import MenuClose from "./images/imported/menu-close.svg"
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

const HeaderDesktop = ({ tabPage }) => <Container sx={{ minHeight: '283px', position: 'relative' }}>
    <Flex sx={{
      alignItems: 'center', 
      justifyContent: 'space-between',
      py: '51px',
    }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Flex sx={{alignItems: 'center'}}>
          {/* <MainLogo style={{ marginRight: '17px'}} /> */}
          <Text variant="logo" sx={{ position: 'relative', top: '2px'}}>The Element Foundation</Text>
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
        <Nav href={`${link.url}`} sx={link.title.toLowerCase() === tabPage ? { '&, &:hover': {borderBottom: '2.4px solid', borderColor: 'primary'}}:{}}>
          {link.title}
        </Nav>)
      }
    </Box>
  </Container>

const HeaderMobile = () => {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false)

  return <Box>
    <Flex sx={{ backgroundColor: 'background', px: '24px', py: '18px', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Text variant="logo" sx={{ fontSize: '19px', position: 'relative', top: '3px' }}>The Element Foundation</Text>
      </Link>
      <Flex sx={{ px: '4px', py: menuIsOpen ? '2px': '4px', alignItems: 'center', position: 'relative', left: '3px', top: '-1px' }} onClick={() => setMenuIsOpen(!menuIsOpen)}>
        {menuIsOpen ? <MenuClose /> : <MenuOpen />}
      </Flex>
    </Flex>
    { menuIsOpen && <Flex sx={{ 
        position: 'absolute', 
        top: '64px', 
        right: 0, 
        minWidth: '200px',
        maxWidth: '100vw',
        flexDirection: 'column', 
        backgroundColor: 'background',
        py: '12px',
        px: '24px',
        boxShadow: '-1px 1px 2px rgb(0 0 0 / 10%)',
        'a': {
          marginBottom: '8px'
        },
        zIndex: 2000
      }}>
      {tabLinks.map(link => 
        <Nav sx={{ fontSize: 'm'}} href={`${link.url}`}>
          {link.title}
        </Nav>)}
        <Nav sx={{ fontSize: 'm'}} href="/donations">{navTitles.donations}</Nav>
        <Nav sx={{ fontSize: 'm'}} href="/contact">{navTitles.contact}</Nav>
    </Flex>}
  </Box>
}

export default function Layout({ children, tabPage, surfaceColor }) {
  return (
    <div>
      <PageHead
        title="Element Foundation"
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
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <FullHeightWrapper>
          <FixedHeight>
            <Box sx={{ display: ['none', 'block']}}>
              <HeaderDesktop tabPage={tabPage} />
            </Box>
            <Box sx={{ display: ['block', 'none']}}>
              <HeaderMobile />
            </Box>
          </FixedHeight>
          <FluidHeight>
            <Box sx={{backgroundColor: `surface.${surfaceColor || 'gray'}`, pb: '55px', pt: ['9px', '55px'], height: '100%' }}>
              <Container>
                {children}
              </Container>  
            </Box>
          </FluidHeight>
          <FixedHeight>
            <Box sx={{ backgroundColor: 'surface.lightGray', color: 'onLightGray', py: '28px'}}>
              <Container>
                <Flex sx={{ justifyContent: 'space-between', mb: ['14px', 0],
                  alignItems: ['flex-start', 'center'], flexDirection: ['column', 'row'] }}
                >
                  <Flex sx={{ alignItems: ['flex-start', 'center'], flexDirection: ['column', 'row'], mb: ['24px', 0] }}>
                    <Text sx={{ fontSize: ['xs', 'xs'], lineHeight: '1.7em', mb: ['25px', 0] }}>{content.common.licence}</Text>
                    <Box sx={{ width: '3px', height: '3px', borderRadius: '50%', display: ['none', 'block'],
                      background: '#C4C4C4', mx: '12px', position: 'relative', top: '-2px'}} 
                    />
                    <Nav href="/terms-of-service" sx={{ color: 'onLightGray', fontSize: 'xs', position: 'relative', top: '-2px' }}>
                      {navTitles["terms-of-service"]}
                    </Nav>
                  </Flex>
                  <Box sx={{ opacity: '0.5' }}>
                    <a
                      href="https://www.linkedin.com/company/daifoundation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInLogo width="21px" height="20px" />
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
