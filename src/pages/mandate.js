import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Mandate() {
  return (
    <Layout tabPage="mandate" surfaceColor="gold">
      <Heading>{content.mandate.title}</Heading>
      {md('mandate.body')}
    </Layout>
  )
}
