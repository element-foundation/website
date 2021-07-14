import React from "react"
import Layout from "../layout"
import { Text, Heading } from "theme-ui"


export default function Home({location}) {
  return (
    <Layout
      navLinks={[
        {
          text: "The Dai Foundation",
          url: "#Dai-Foundation",
        },
        {
          text: "Purpose",
          url: "#Purpose",
        },
      ].map(link => (
        <span>
          {link.text}
        </span>
      ))}
      scrollToHash={scrollToHash}
    >
      <Heading>Hello World</Heading>
      <Text sx={{fontWeight: 'heading', fontSize: 'l'}}>asdf</Text>
    </Layout>
  )
}
