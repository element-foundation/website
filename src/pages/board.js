import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import HtmlContent from "../components/HtmlContent"

export default function Board({location}) {
  return (
    <Layout tabPage="board" surfaceColor="conch">
      <Heading>{content.board.title}</Heading>
      <HtmlContent page="board" />
    </Layout>
  )
}
