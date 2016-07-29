
var rootDir = process.argv[2];
console.info(rootDir);
var BaseDir = "./src/"+rootDir;

// Middle wares
var browserSync = require('browser-sync');

function lessMiddleware (req, res, next) {
    // Adapted directly from Browsersync exampes:
    //   https://github.com/Browsersync/recipes/tree/master/recipes/middleware.css.injection

    var parsed = require("url").parse(req.url);
    if (parsed.pathname.match(/\.less$/)) {
        return less(parsed.pathname).then(function (o) {
            res.setHeader('Content-Type', 'text/css');
            res.end(o.css);
        });
    }
    next();

    function less(src) {
        var f = require('fs').readFileSync(BaseDir+src).toString();
        return require('less').render(f);
    }
}


module.exports = {
    "files" : [BaseDir+"/**/*.js",BaseDir+"/**/*.css",BaseDir+"/**/*.html",BaseDir+"/**/*.less"],
    "server" : {
        "baseDir" : BaseDir,
        "middleware" : {
            2 : lessMiddleware
        }
    },
    serveStatic: ['.', './src/shared']
  //  "browser" : ["google-chrome", "firefox"]
}


/* Reference url : https://www.browsersync.io/docs/options */
