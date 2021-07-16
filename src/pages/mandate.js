import React from "react"
import Layout from "../layout"
import { Container, Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Mandate() {
  return (
    <Layout tabPage="mandate" surfaceColor="gold">
      <Container variant="text">
        <Heading>{content.mandate.title}</Heading>
        {md('mandate.body')}
      </Container>
    </Layout>
  )
}
