import React from "react"
import Helmet from "helmet"
import { Link } from "gatsby"
import "./style.css"

export default function Layout({ navLinks = [], children }) {
  return (
    <div>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href="/fonts/Mukta/Mukta-Regular.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/Mukta/Mukta-Regular.woff"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/Mukta/Mukta-Bold.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/Mukta/Mukta-Bold.woff"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div className="navi">
        <div className="constainer">
          <div className="navi-wrapper">
            <a href="#Home" className="w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour.png"
                width="250"
                srcSet="https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour-p-500.png 500w, https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour-p-800.png 800w, https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour-p-1080.png 1080w, https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour.png 1302w"
                sizes="(max-width: 479px) 100vw, 250px"
                alt=""
              />
            </a>
            <div className="navi-link-wrapper">
              {[{ text: "Home", url: "/" }, ...navLinks].map(link => (
                <Link to={link.url} className="navi-links">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="navi-line" />
      </div>
      {children}
      <div id="Footer" className="section footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-info">
              <a
                href="/"
                aria-current="page"
                className="w-inline-block w--current"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour.png"
                  width="250"
                  srcSet="https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour-p-500.png 500w, https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour-p-800.png 800w, https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour-p-1080.png 1080w, https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f16c4121ce3203ad30fdf6d_Dai_foundation_colour.png 1302w"
                  sizes="(max-width: 479px) 57vw, 250px"
                  alt=""
                  className="image-2"
                />
              </a>
              <div className="text-block copyright">
                Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
              </div>
            </div>
            <div className="footer-info">
              <Link to="/terms-of-service" className="link-2">
                Privacy Policy
              </Link>
            </div>
            <div className="footer-info">
              <Link to="/terms-of-service" className="link-2">
                Terms of Services
              </Link>
            </div>
            <div className="footer-info">
              <Link
                to="https://www.linkedin.com/company/daifoundation"
                target="_blank"
                className="w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5f16c336de8961326b391c37/5f1af3bf039ee3b166bf8e02_5ef0abee113da29ef36c2998_linkedin.svg"
                  alt=""
                  className="image-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
