const fs = require('fs')

const used = ["navi", "constainer", "navi-wrapper", "w-inline-block", "navi-link-wrapper", "navi-links", "navi-line", "section", "hero", "container", "max-700px", "h1-style", "white", "max-600px", "parastyle", "button", "text-img", "max-1000px", "section-line", "heading-3", "noimg", "text-text", "w-row", "w-col", "w-col-5", "bold-text", "left-column", "link", "column-3", "w-col-7", "bold-text-2", "footer", "footer-wrapper", "footer-info", "w--current", "image-2", "text-block", "copyright", "link-2", "image-3"]
const path = './src/style.css'
let content = fs.readFileSync(path).toString()

// const BEFORE_CLASS_CHAR = '\n'
const BEFORE_CLASS_CHAR = ' '

let definedClasses = []
let index = 0
do {
  index = content.indexOf(BEFORE_CLASS_CHAR + '.', index + 1)

  if (index === -1) {
    break;
  }

  // find end of word
  let end
  for (end = index + 1; content[end] !== ' ' && content[end] !== '{' && end < content.length; end++) {

  }
  definedClasses.push(content.substring(index + 1, end))
} while(index < content.length && index !== -1)

definedClasses.forEach(definedClass => {
  if (used.includes(definedClass.substr(1))) {
    return
  }

  // find ranges of indexes to remove from content
  const at = content.indexOf(definedClass)
  let endBraceIndex
  for (endBraceIndex = at + 1; content[endBraceIndex] !== '}' && endBraceIndex < content.length; endBraceIndex++) {

  }

  // delete from content
  content = content.substr(0, at) + content.substr(endBraceIndex + 1);

})

fs.writeFileSync(path, content)