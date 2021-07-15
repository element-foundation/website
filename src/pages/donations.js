import React from "react"
import Layout from "../layout"
import { Heading, Text } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Donations() {
  return (
    <Layout surfaceColor="gold">
      <Heading>{content.donations.title}</Heading>
      {md('donations.body')}
      <Text variant="ethAddress">0x234w90e</Text>
      <Text sx={{ fontSize: 'xs' }}>{md('donations.disclaimer')}</Text>
      <Text>{content.donations.bottom}</Text>
    </Layout>
  )
}
