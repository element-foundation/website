import React from "react"
import Layout from "../layout"

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
          <div className="text-img">
            <div className="max-1000px">
              <h2 className="heading-4">Terms of Service</h2>
              <p className="parastyle">Add text here</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-line" />
      <div id="Privacy-Policy" className="section pp">
        <div className="container">
          <div className="text-img">
            <div className="max-1000px">
              <h2 className="heading-3 pp">Privacy Policy</h2>
              <p className="parastyle pp">Add text here</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-line" />
    </Layout>
  )
}
