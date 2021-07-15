import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import Markdown from "../components/Markdown/Markdown"

export default function Board({location}) {
  return (
    <Layout tabPage="board" surfaceColor="conch">
      <Heading>{content.board.title}</Heading>
      <Markdown page="board" />
    </Layout>
  )
}
