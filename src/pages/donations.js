import React from "react"
import Layout from "../layout"
import { Box, Container, Heading, Text } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"
import EthAddress from '../components/EthAddress'

export default function Donations() {
  return (
    <Layout surfaceColor="gold">
      <Container variant="text">
        <Heading>{content.donations.title}</Heading>
        {md('donations.body')}
        <Box sx={{ my: '40px' }}>
          <EthAddress address="0x85A294558d5597aC156dd920A74b502b6F2B1b86" />
          <Box sx={{ height: '4px'}} />
          <Text sx={{ fontSize: 'xs' }}>{md('donations.disclaimer')}</Text>
        </Box>
        <Text>{content.donations.bottom}</Text>
      </Container>
    </Layout>
  )
}
