import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import { Box } from 'theme-ui'

export default function TermsOfService({location, data}) {

  return (
    <Layout>
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
