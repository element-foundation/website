import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Home() {
  return (
    <Layout tabPage="about" surfaceColor="gray">
      <Heading>{content.about.title}</Heading>
      {md('about.body')}
    </Layout>
  )
}
