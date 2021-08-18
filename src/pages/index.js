import React from "react"
import Layout from "../layout"
import { Box, Container, Flex, Heading, Image } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Home() {
  return (
    <Layout tabPage="about" surfaceColor="gray">
      <Flex sx={{ justifyContent: "space-between", flexDirection: ['column', 'row'], maxWidth: '1098px' }}>
        <Container variant="text">
          <Heading>{content.about.title}</Heading>
          {md('about.body')}
        </Container>
        <Box sx={{ display: ['none', 'flex'], flexShrink: 0, alignItems: 'center' }}>
          <Image src="/img/aerial-view.png" sx={{ width: "249px", height: "374px"}} />
        </Box>
        <Box sx={{ display: ['flex', 'none'], flexShrink: 0, justifyContent: 'center', mt: '17px' }}>
          <Image src="/img/aerial-view-small.png" sx={{ width: "205px", height: "165px"}} />
        </Box>
      </Flex>
    </Layout>
  )
}
