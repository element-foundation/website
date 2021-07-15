const fs = require('fs')
const remark = require('remark')
const html = require('remark-html')
const content = require('./src/content.json')

const traverse = function(o, fn) {
  for (let i in o) {
    if (o.hasOwnProperty(i)) {
      fn.apply(this, [i, o[i], o]);
      if (o[i] !== null && typeof o[i] === "object") {
        traverse(o[i], fn);
      }
    }
  }
}

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



exports.onPreInit = async () => {
  // make copy of content.json but with markdown converted to html
  const contentHtml = Object.assign({}, content)
  let stringValuesCount = 0
  traverse(contentHtml, async (key, value, owner) => {
    if (typeof value === 'string') {
      stringValuesCount++
    }
  })

  traverse(contentHtml, async (key, value, owner) => {
    if (typeof value === 'string') {
      owner[key] = await mdToHtml(value)
      stringValuesCount--
      if (stringValuesCount == 0) {
        fs.writeFileSync('./src/.contentHtml.json', JSON.stringify(contentHtml))
      }
    }
  })
}
