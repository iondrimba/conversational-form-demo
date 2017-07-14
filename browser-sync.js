module.exports = {
  server: {
    baseDir: "./",
    index: "index.html"
  },
  injectChanges: true,
  startPath: "index.html",
  watchOptions: {
    ignoreInitial: false,
  },
  files: ['*.html', '*.js', '*.css']
}
