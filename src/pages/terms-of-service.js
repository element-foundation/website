import React from "react"
import Layout from "../layout"
import { Box } from "theme-ui"

export default function TermsOfService() {
  return (
    <Layout
      navLinks={[
        {
          text: "Terms of Service",
          url: "#Terms-of-Services",
        },
        {
          text: "Privacy Policy",
          url: "#Privacy-Policy",
        },
      ]}
    >
      <div id="Terms-of-Services" className="section tos">
        <div className="container">
          <Box sx={{ maxWidth: "1000px" }}>
            <h2>Terms of Service</h2>
            <p>Add text here</p>
          </Box>
        </div>
      </div>
      <div className="section-line" />
      <div id="Privacy-Policy" className="section dark">
        <div className="container">
          <div>
            <Box sx={{ maxWidth: "1000px" }}>
              <h2>Privacy Policy</h2>
              <p>Add text here</p>
            </Box>
          </div>
        </div>
      </div>
      <div className="section-line" />
    </Layout>
  )
}
