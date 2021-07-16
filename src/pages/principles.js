import React from "react"
import Layout from "../layout"
import { Container, Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Principles() {
  return (
    <Layout tabPage="principles" surfaceColor="gold">
      <Container variant="text">
        <Heading>{content.principles.title}</Heading>
        {md('principles.body')}
      </Container>
    </Layout>
  )
}
