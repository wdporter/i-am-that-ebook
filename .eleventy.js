module.exports = config => {

  config.addPassthroughCopy("src/META-INF")
  config.addPassthroughCopy("src/package.opf")
  config.addPassthroughCopy("src/mimetype")
  config.addPassthroughCopy("src/toc.xhtml")
  config.addPassthroughCopy("src/cover.jpg")

  return {

    dir: {
      input: "src",
      output: "dist"
    }
  }
}