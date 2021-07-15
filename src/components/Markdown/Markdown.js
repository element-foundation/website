import React from 'react'
import { useStaticQuery } from 'gatsby'


// Content is converted from markdown to html in ./sourceNodes.js
export default function Markdown({page}) {
  const data = useStaticQuery(
    graphql`
      query HtmlContentQuery {
        htmlContent {
          about
          board
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