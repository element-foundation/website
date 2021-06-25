import React from "react"
import Layout from "../layout"
import useScrollToHash from "../useScrollToHash"


export default function Home({location}) {
  const scrollToHash = useScrollToHash(location.hash)

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
        <span onClick={() => scrollToHash(link.url)} className="navi-link">
          {link.text}
        </span>
      ))}
      scrollToHash={scrollToHash}
    >

    </Layout>
  )
}
