import React from "react"
import Layout from "../layout"

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
          <div className="max-700px">
            <h1 className="h1-style white">The Dai Foundation</h1>
            <div className="max-600px">
              <p className="parastyle">
                An independent legal entity for safeguarding the Maker
                community’s intellectual property.
              </p>
            </div>
            <a href="#Dai-Foundation" className="button w-inline-block">
              <div>Learn More</div>
            </a>
          </div>
        </div>
      </div>
      <div id="Dai-Foundation" className="section">
        <div className="container">
          <div className="text-img">
            <div className="max-1000px">
              <h2>What is the Dai Foundation?</h2>
              <p className="parastyle">
                The Dai Foundation is an independent legal entity for
                safeguarding the Maker community’s intellectual property (IP).
                It was created in Denmark and operates solely on the basis of
                objective and rigid statutes that define its mandate. In the
                beginning of 2020, the Maker Foundation irreversibly transferred
                the ownership of Maker and Dai trademarks to the Dai Foundation
                for safekeeping.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-line" />
      <div id="Purpose" className="section">
        <div className="container">
          <div className="text-img">
            <div className="max-1000px">
              <h2 className="heading-3">What is the purpose of it?</h2>
              <p className="parastyle">
                The Dai Foundation has been formed by the initiators of the
                open, decentralized and permissionless MakerDAO system with the
                virtual currency Dai. Its purpose is to safeguard what cannot be
                technologically decentralized in the Maker Protocol which
                includes trademarks and other intellectual property, such as
                open-source copyrights and other relevant assets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section noimg">
        <div className="container">
          <div className="text-text">
            <div className="w-row">
              <div className="w-col w-col-5">
                <div className="max-700px">
                  <h2>
                    <strong className="bold-text">
                      How does the Dai Foundation act?
                    </strong>
                    <br />
                  </h2>
                </div>
                <div className="max-600px">
                  <p className="parastyle left-column">
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
                </div>
              </div>
              <div className="column-3 w-col w-col-7">
                <div className="max-600px">
                  <h2>
                    <strong className="bold-text-2">
                      What does not fall within the mandate of the Dai
                      Foundation?
                    </strong>
                    <br />
                  </h2>
                </div>
                <div className="max-600px">
                  <p className="parastyle left-column">
                    It <strong>does not</strong> influence or press any personal
                    agendas.
                    <br />‍<br />
                    It <strong>is not</strong> involved in emergency shutdown
                    procedures. However, the board of trustees aims to be
                    prepared and plan for edge-cases where the Dai Foundation
                    may need to offer support with answering related IP
                    questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
