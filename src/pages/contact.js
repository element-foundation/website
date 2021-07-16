import React from "react"
import Layout from "../layout"
import { Container, Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Contact() {
  return (
    <Layout surfaceColor="gray">
      <Container variant="text">
        <Heading>{content.contact.title}</Heading>
        {md('contact.body')}
      </Container>
    </Layout>
  )
}
