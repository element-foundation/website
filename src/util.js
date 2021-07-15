import React from 'react'
import get from 'lodash.get'
import contentHtml from './.contentHtml.json'

export function renderMarkdown(contentPath) {
  const htmlString = get(contentHtml, contentPath)
  return <div dangerouslySetInnerHTML={{__html: htmlString}} />
}