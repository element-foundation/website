import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Assets() {
  return (
    <Layout tabPage="assets" surfaceColor="conch">
      <Heading>{content.assets.title}</Heading>
      {md('assets.body')}
    </Layout>
  )
}
