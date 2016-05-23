"use strict";

const uuid = require('node-uuid')

module.exports = (options) => (req, res, next) => {
    const headerName = (options || {}).headerName || 'X-Request-Id'
    
    if (req.headers[headerName]) {
        req.id = String(req.headers[headerName]).valueOf()
    } else {
        req.id = String(uuid.v4()).valueOf()
    }
    
    res.setHeader(headerName, String(req.id).valueOf())
    
    return next()
}
