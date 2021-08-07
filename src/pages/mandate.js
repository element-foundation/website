import React from "react"
import Layout from "../layout"
import { Container, Flex, Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"
import DaiMaker from "../images/imported/dai-maker.svg"

export default function Mandate() {
  return (
    <Layout tabPage="mandate" surfaceColor="gold">
      <Flex sx={{ justifyContent: "space-between" }}>
        <Container variant="text">
          <Heading>{content.mandate.title}</Heading>
          {md('mandate.body')}
        </Container>
        <Flex sx={{ justifyContent: "flex-end", alignItems: "center", mt: "26px"}}>
          <DaiMaker />
        </Flex>
      </Flex>
    </Layout>
  )
}
