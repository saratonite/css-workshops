
var rootDir = process.argv[2];
console.info(rootDir);
var BaseDir = "./src/"+rootDir;
module.exports = {
    "files" : "./src/**/*.{js, html, css}",
    "server" : {
        "baseDir" : BaseDir
    },
  //  "browser" : ["google-chrome", "firefox"]
}
