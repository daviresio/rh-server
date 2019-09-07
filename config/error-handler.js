module.exports = function (err, req, res, next) {
    if(req.headersSent) return next(err)

        //console.log('error', err)

    res.status(500).json(err)

}
