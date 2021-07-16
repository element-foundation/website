import React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import { Container,  Box } from 'theme-ui'
import theme from '../theme'

export default function TermsOfService({location, data}) {

  return (
    <Layout>
      <Container variant="text" sx={theme.styles}>
        <div dangerouslySetInnerHTML={{ __html: data.tos.html }} />
      </Container>
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
