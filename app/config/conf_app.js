"use strict"
const isProd = process.env.NODE_ENV==='production'
const isDev = !isProd
module.exports = {
	isProd: isProd,
	isDev: isDev,
	publicPath:  isProd ? "release" : ".tmp/serve",
	viewPath: isProd ? "dist/views" : "views",
	viewEngine: 'ejs',
	vendorPath: 'bower_components'
}