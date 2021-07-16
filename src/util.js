import React from 'react'
import get from 'lodash.get'
import { Box } from 'theme-ui'

import contentHtml from './.contentHtml.json'
import theme from './theme'

export function renderMarkdown(contentPath) {
  const htmlString = get(contentHtml, contentPath)
  return <Box sx={theme.styles}>
      <div dangerouslySetInnerHTML={{__html: htmlString}} />
    </Box>
}