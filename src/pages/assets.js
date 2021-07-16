import React from "react"
import Layout from "../layout"
import { Container, Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Assets() {
  return (
    <Layout tabPage="assets" surfaceColor="conch">
      <Container variant="text">
        <Heading>{content.assets.title}</Heading>
        {md('assets.body')}
        {md('assets.links')}
      </Container>
    </Layout>
  )
}
