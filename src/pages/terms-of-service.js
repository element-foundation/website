import React from "react"
import Layout from "../layout"
import { Box } from "theme-ui"
import GoldenBackground from "../components/GoldenBackground"
import useScrollToHash from "../useScrollToHash"
import { graphql, Link } from "gatsby"

export default function TermsOfService({location, data}) {
  const scrollToHash = useScrollToHash(location.hash)

  return (
    <Layout
      navLinks={[
        {
          text: "The Dai Foundation",
          url: "/#Dai-Foundation",
        },
        {
          text: "Purpose",
          url: "/#Purpose",
        },
      ].map(link => (
        <Link to={link.url} className="navi-link">
          {link.text}
        </Link>
      ))}
      scrollToHash={scrollToHash}
    >
      <GoldenBackground>
        <div id="Terms-of-Service" className="section" style={{paddingTop: '100px', background: 'none'}}>
          <div className="container">
            <Box sx={{ maxWidth: "1000px" }}>
              <div dangerouslySetInnerHTML={{ __html: data.tos.html }} />
            </Box>
          </div>
        </div>
      </GoldenBackground>
      <div className="section-line" />
    </Layout>
  )
}

export const query = graphql`
  query TosQuery {
    tos: markdownRemark {
      html
    }
  }
`
