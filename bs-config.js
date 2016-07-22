
var rootDir = process.argv[2];
console.info(rootDir);
var BaseDir = "./src/"+rootDir;


module.exports = {
    "files" : [BaseDir+"/**/*.js",BaseDir+"/**/*.css",BaseDir+"/**/*.html"],
    "server" : {
        "baseDir" : BaseDir
    },
    serveStatic: ['.', './src/shared']
  //  "browser" : ["google-chrome", "firefox"]
}


/* Reference url : https://www.browsersync.io/docs/options */
