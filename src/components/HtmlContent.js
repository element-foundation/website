import React from 'react'
import { useStaticQuery } from 'gatsby'


// Content is converted from markdown to html in /gatsby-node.js
export default function HtmlContent({page}) {
  const data = useStaticQuery(
    graphql`
      query HtmlContentQuery {
        htmlContent {
          about
          donations
          contact
          mandate
          principles
          assets
        }
      }
    `
  )
  return <div dangerouslySetInnerHTML={{ __html: data.htmlContent[page] }} />
}