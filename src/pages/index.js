import React from "react"
import Layout from "../layout"
import { Box, Grid } from "theme-ui"
import styled from "styled-components"
import GoldenBackground from "../components/GoldenBackground"
import useScrollToHash from "../useScrollToHash"

const Button = styled.div`
  display: inline-block;
  padding: 10px 20px;
  align-self: center;
  border-radius: 20px;
  background-color: #211734;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;
  position: relative;
  top: 0;
  :hover {
    top: -2px;
    background-color: #50445e;
  }
`

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
      <GoldenBackground sx={{ p: ["150px 0 110px", "200px 0 160px"] }}>
        <div className="container">
          <Box sx={{ maxWidth: "700px" }}>
            <h1 style={{marginBottom: '15px'}}>The Dai Foundation</h1>
            <Box sx={{ maxWidth: "600px" }}>
              <p>
                An independent legal entity for safeguarding the Maker
                community’s intellectual property.
              </p>
            </Box>
            <Button onClick={() => scrollToHash('#Dai-Foundation')}>Learn More</Button>
          </Box>
        </div>
      </GoldenBackground>
      <div id="Dai-Foundation" className="section">
        <div className="container">
          <Box sx={{ maxWidth: "1000px" }}>
            <h2>What is the Dai Foundation?</h2>
            <p>
              The Dai Foundation is an independent legal entity for safeguarding
              the Maker community’s intellectual property (IP). It was created
              in Denmark and operates solely on the basis of objective and rigid
              statutes that define its mandate. In the beginning of 2020, the
              Maker Foundation irreversibly transferred the ownership of Maker
              and Dai trademarks to the Dai Foundation for safekeeping.
            </p>
          </Box>
        </div>
      </div>
      <div className="section-line" />
      <div id="Purpose" className="section">
        <div className="container">
          <div>
            <Box sx={{ maxWidth: "1000px" }}>
              <h2>What is the purpose of it?</h2>
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
      <div className="section dark">
        <div className="container">
          <Grid
            sx={{
              gridTemplateColumns: ["90%", null, "36% 49%"],
              gridColumnGap: "6%",
              gridRowGap: "25px",
            }}
          >
            <div>
              <h2>How does the Dai Foundation act?</h2>
              <p>
                The Dai Foundation will use appropriate tools to ensure that the
                Maker Protocol remains aligned with its core principles. More
                information about the principles can be found{" "}
                <a
                  href="https://forum.makerdao.com/t/announcing-the-dai-foundation/1046"
                  target="_blank"
                  className="link"
                >
                  here
                </a>
                .
              </p>
            </div>
            <div>
              <h2>
                What does not fall within the mandate of the Dai Foundation?
              </h2>
              <p>
                It <strong>does not</strong> influence or press any personal
                agendas.
                <br />‍<br />
                It <strong>is not</strong> involved in emergency shutdown
                procedures. However, the board of trustees aims to be prepared
                and plan for edge-cases where the Dai Foundation may need to
                offer support with answering related IP questions.
              </p>
            </div>
          </Grid>
        </div>
      </div>
    </Layout>
  )
}
