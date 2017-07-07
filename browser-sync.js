module.exports = {
  server: {
    baseDir: "",
    index: "index.htm"
  },
  open: "local",
  injectChanges: true,
  startPath: "index.html",
  watchOptions: {
    ignoreInitial: true,
  },
  files: ['*.html', '*.js', '*.css']
}