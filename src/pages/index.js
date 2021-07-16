import React from "react"
import Layout from "../layout"
import { Container, Flex, Heading, Image } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Home() {
  return (
    <Layout tabPage="about" surfaceColor="gray">
      <Flex sx={{ justifyContent: "space-between" }}>
        <Container variant="text">
          <Heading>{content.about.title}</Heading>
          {md('about.body')}
        </Container>
        <Image src="/img/aerial-view.png" sx={{ flexShrink: 0, width: "249px", height: "374px"}} />
      </Flex>
    </Layout>
  )
}
