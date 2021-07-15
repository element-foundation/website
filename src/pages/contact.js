import React from "react"
import Layout from "../layout"
import { Heading } from "theme-ui"
import content from "../content.json"
import HtmlContent from "../components/HtmlContent"

export default function Contact({location}) {
  return (
    <Layout surfaceColor="gray">
      <Heading>{content.contact.title}</Heading>
      <HtmlContent page="contact" />
    </Layout>
  )
}
