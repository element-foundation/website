import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Contact() {
  return (
    <Layout surfaceColor="gray">
      <Heading>{content.contact.title}</Heading>
      {md('contact.body')}
    </Layout>
  )
}
