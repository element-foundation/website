import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import Markdown from "../components/Markdown/Markdown"

export default function Assets({location}) {
  return (
    <Layout tabPage="assets" surfaceColor="conch">
      <Heading>{content.assets.title}</Heading>
      <Markdown page="assets" />
    </Layout>
  )
}
