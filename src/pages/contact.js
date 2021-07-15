import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import Markdown from "../components/Markdown/Markdown"

export default function Contact({location}) {
  return (
    <Layout surfaceColor="gray">
      <Heading>{content.contact.title}</Heading>
      <Markdown page="contact" />
    </Layout>
  )
}
