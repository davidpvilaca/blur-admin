/**
 * Created by david on 04/08/16.
 * blur-admin
 */
"use strict"
module.exports = {
    teste: teste,
    index: getIndexPage
}

/**
 * Created by david on 04/08/16
 * @param req
 * @param res
 */
function teste(req, res) {
    res.json({path: req.path, res: "Hello World"})
}

/**
 * Created by david on 04/08/16
 * @param req
 * @param res
 */
function getIndexPage(req, res) {
    res.sendFile(path.join(__dirname, '../', conf.publicPath, 'index.html'))
}