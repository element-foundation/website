const remark = require('remark')
const html = require('remark-html')
const content = require('./src/content.json')

async function mdToHtml(markdown) {
  return new Promise((resolve, reject) => {
    remark()
      .use(html)
      .process(markdown, function (err, file) {
        if (err) {
          return reject(err)
        }
        resolve(String(file))
      })
  })
}

// Make nodes with html data, to be used in /src/components/HtmlContent
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const htmlContent = {}

  const pageNames = Object.keys(content).filter(key => key !== 'common')
  for (var i in pageNames ) {
    try {
      htmlContent[pageNames[i]] = await mdToHtml(content[pageNames[i]].body)
    } catch(e) {
      throw new Error('Error parsing markdown content on ' + pagesNames[i])
    }
  }

  const nodeContent = JSON.stringify(htmlContent)

  const nodeMeta = {
    id: createNodeId(`html-content`),
    parent: null,
    children: [],
    internal: {
      type: `HtmlContent`,
      mediaType: `text/json`,
      content: nodeContent,
      contentDigest: createContentDigest(htmlContent)
    }
  }

  const node = Object.assign({}, htmlContent, nodeMeta)
  createNode(node)
}