import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Principles() {
  return (
    <Layout tabPage="principles" surfaceColor="gold">
      <Heading>{content.principles.title}</Heading>
      {md('principles.body')}
    </Layout>
  )
}
