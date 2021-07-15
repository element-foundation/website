import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import HtmlContent from "../components/HtmlContent"

export default function Assets({location}) {
  return (
    <Layout tabPage="assets" surfaceColor="conch">
      <Heading>{content.assets.title}</Heading>
      <HtmlContent page="assets" />
    </Layout>
  )
}
