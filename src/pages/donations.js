import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import Markdown from "../components/Markdown/Markdown"

export default function Donations({location}) {
  return (
    <Layout surfaceColor="gold">
      <Heading>{content.donations.title}</Heading>
      <Markdown page="donations" />
    </Layout>
  )
}
