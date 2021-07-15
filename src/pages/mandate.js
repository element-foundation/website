import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import HtmlContent from "../components/HtmlContent"

export default function Mandate({location}) {
  return (
    <Layout tabPage="mandate" surfaceColor="gold">
      <Heading>{content.mandate.title}</Heading>
      <HtmlContent page="mandate" />
    </Layout>
  )
}
