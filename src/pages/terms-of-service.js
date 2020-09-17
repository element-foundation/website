import React from "react"
import Layout from "../layout"
import { Box } from "theme-ui"

export default function TermsOfService() {
  return (
    <Layout
      navLinks={[
        {
          text: "Terms of Service",
          url: "#",
        },
        {
          text: "Privacy Policy",
          url: "#Privacy-Policy",
        },
      ]}
    >
      <div id="Terms-of-Services" className="section tos">
        <div className="container">
            <Box sx={{maxWidth: '1000px'}}>
              <h2 className="heading-4">Terms of Service</h2>
              <p>Add text here</p>
            </Box>
        </div>
      </div>
      <div className="section-line" />
      <div id="Privacy-Policy" className="section pp">
        <div className="container">
          <div className="text-img">
            <Box sx={{maxWidth: '1000px'}}>
              <h2 className="heading-3 pp">Privacy Policy</h2>
              <p className="pp">Add text here</p>
            </Box>
          </div>
        </div>
      </div>
      <div className="section-line" />
    </Layout>
  )
}
