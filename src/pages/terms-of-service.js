import React from "react"
import Layout from "../layout"
import { Box } from "theme-ui"
import GoldenBackground from "../components/GoldenBackground"
import useScrollToHash from "../useScrollToHash"
import { graphql } from "gatsby"

export default function TermsOfService({location, data}) {
  const scrollToHash = useScrollToHash(location.hash)

  return (
    <Layout
      navLinks={[
        {
          text: "Terms of Service",
          url: "#Terms-of-Services",
        },
        {
          text: "Privacy Policy",
          url: "#Privacy-Policy",
        },
      ]}
      scrollToHash={scrollToHash}
    >
      <GoldenBackground>
        <div id="Terms-of-Services" className="section" style={{paddingTop: '100px', background: 'none'}}>
          <div className="container">
            <Box sx={{ maxWidth: "1000px" }}>
              <div dangerouslySetInnerHTML={{ __html: data.tos.html }} />
            </Box>
          </div>
        </div>
      </GoldenBackground>
      <div className="section-line" />
      <div id="Privacy-Policy" className="section dark">
        <div className="container">
          <div>
            <Box sx={{ maxWidth: "1000px" }}>
              <h2>Privacy Policy</h2>
              <p>Add text here</p>
            </Box>
          </div>
        </div>
      </div>
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
