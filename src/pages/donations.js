import React from "react"
import Layout from "../layout"
import { Container, Heading, Text } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"
import EthAddress from '../components/EthAddress'

export default function Donations() {
  return (
    <Layout surfaceColor="gold">
      <Container variant="text">
        <Heading>{content.donations.title}</Heading>
        {md('donations.body')}
        <EthAddress address="0x3366609b2815ec733a2b7e374d1..." />
        <Text sx={{ fontSize: 'xs' }}>{md('donations.disclaimer')}</Text>
        <Text>{content.donations.bottom}</Text>
      </Container>
    </Layout>
  )
}
