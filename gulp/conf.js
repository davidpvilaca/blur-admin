/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');
var proxyMiddleware = require('http-proxy-middleware');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'client',
  dist: 'release',
  devDist: 'dev-release',
  tmp: '.tmp',
  e2e: 'e2e',
  node: 'app'
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/require\.js/],
  directory: 'bower_components'
};

var nodeServer = 'http://localhost:3000/';
exports.serveMiddleware = [
  proxyMiddleware("/teste", {target: nodeServer, changeOrigin: true}),
]

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
