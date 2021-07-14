import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import HtmlContent from "../components/HtmlContent"

export default function Home({location}) {
  return (
    <Layout tabPage="about">
      <Heading>{content.about.title}</Heading>
      <HtmlContent page="about" />
    </Layout>
  )
}
