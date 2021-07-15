import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import Markdown from "../components/Markdown/Markdown"

export default function Principles({location}) {
  return (
    <Layout tabPage="principles" surfaceColor="gold">
      <Heading>{content.principles.title}</Heading>
      <Markdown page="principles" />
    </Layout>
  )
}
