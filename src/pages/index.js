import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import Markdown from "../components/Markdown/Markdown"

export default function Home({location}) {
  return (
    <Layout tabPage="about" surfaceColor="gray">
      <Heading>{content.about.title}</Heading>
      <Markdown page="about" />
    </Layout>
  )
}
