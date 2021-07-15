import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import HtmlContent from "../components/HtmlContent"

export default function Donations({location}) {
  return (
    <Layout surfaceColor="gold">
      <Heading>{content.donations.title}</Heading>
      <HtmlContent page="donations" />
    </Layout>
  )
}
