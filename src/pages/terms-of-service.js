import React from "react"
import Layout from "../layout"
import { graphql, Link } from "gatsby"
import { Box } from 'theme-ui'

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
        <Link to={link.url}>
          {link.text}
        </Link>
      ))}
    >
        <div id="Terms-of-Service" style={{paddingTop: '100px', background: 'none'}}>
          <div>
            <Box sx={{ maxWidth: "1000px" }}>
              <div dangerouslySetInnerHTML={{ __html: data.tos.html }} />
            </Box>
          </div>
        </div>
      <div />
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
