import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import HtmlContent from "../components/HtmlContent"

export default function Principles({location}) {
  return (
    <Layout tabPage="principles" surfaceColor="gold">
      <Heading>{content.principles.title}</Heading>
      <HtmlContent page="principles" />
    </Layout>
  )
}
