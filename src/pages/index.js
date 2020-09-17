import React from "react"
import Layout from "../layout"
import { Box } from "theme-ui"

export default function Home() {
  return (
    <Layout
      navLinks={[
        {
          text: "Dai Foundation",
          url: "#Dai-Foundation",
        },
        {
          text: "Purpose",
          url: "#Purpose",
        },
      ]}
    >
      <div id="Home" className="section hero">
        <div className="container">
          <Box sx={{maxWidth: "700px"}}>
            <h1>The Dai Foundation</h1>
            <Box sx={{maxWidth: "600px"}}>
              <p>
                An independent legal entity for safeguarding the Maker
                community’s intellectual property.
              </p>
            </Box>
            <a href="#Dai-Foundation" className="button">
              Learn More
            </a>
          </Box>
        </div>
      </div>
      <div id="Dai-Foundation" className="section">
        <div className="container">
          <Box sx={{maxWidth: "1000px"}}>
            <h2>What is the Dai Foundation?</h2>
            <p>
              The Dai Foundation is an independent legal entity for
              safeguarding the Maker community’s intellectual property (IP).
              It was created in Denmark and operates solely on the basis of
              objective and rigid statutes that define its mandate. In the
              beginning of 2020, the Maker Foundation irreversibly transferred
              the ownership of Maker and Dai trademarks to the Dai Foundation
              for safekeeping.
            </p>
          </Box>
        </div>
      </div>
      <div className="section-line" />
      <div id="Purpose" className="section">
        <div className="container">
          <div className="text-img">
            <Box sx={{maxWidth: "1000px"}}>
              <h2 className="heading-3">What is the purpose of it?</h2>
              <p>
                The Dai Foundation has been formed by the initiators of the
                open, decentralized and permissionless MakerDAO system with the
                virtual currency Dai. Its purpose is to safeguard what cannot be
                technologically decentralized in the Maker Protocol which
                includes trademarks and other intellectual property, such as
                open-source copyrights and other relevant assets.
              </p>
            </Box>
          </div>
        </div>
      </div>
      <div className="section noimg">
        <div className="container">
          <Box sx={{maxWidth: "700px"}} css={`p {max-width: 600px;}`}>
            <h2 style={{color: "#fff"}}>
                How does the Dai Foundation act?
            </h2>
            <p className="left-column">
              The Dai Foundation will use appropriate tools to ensure that
              the Maker Protocol remains aligned with its core principles.
              More information about the principles can be found{" "}
              <a
                href="https://forum.makerdao.com/t/announcing-the-dai-foundation/1046"
                target="_blank"
                className="link"
              >
                here
              </a>
              .
            </p>
            <h2 style={{color: "#fff"}}>
                What does not fall within the mandate of the Dai
                Foundation?
            </h2>
            <p className="left-column">
              It <strong>does not</strong> influence or press any personal
              agendas.
              <br />‍<br />
              It <strong>is not</strong> involved in emergency shutdown
              procedures. However, the board of trustees aims to be
              prepared and plan for edge-cases where the Dai Foundation
              may need to offer support with answering related IP
              questions.
            </p>
          </Box>
        </div>
      </div>
    </Layout>
  )
}
