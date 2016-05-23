"use strict";

const should = require('should')
const reqid = require('../')
const uuid = require('node-uuid')

const getRes = () => {
    return {
        headers: {},
        setHeader: function (name, value) {
            this.headers[name] = value
        }
    }
}

const headerName = 'X-Request-Id'
const middleware = reqid()

describe("RequestID", () => {
    it('should generate request id for new request', (done) => {
        let req = { // req
                headers: {},
                id: undefined
            },
            res = getRes()
        
        middleware(req, res, () => {
            req.should.have.property('id')
            req.id.should.be.ok()
            res.headers.should.have.property(headerName)
            req.id.should.equal(res.headers[headerName])
            done()
        })
    })
    
    it('should keep existing id', (done) => {
        let id = uuid.v4()
        let req = {
            headers: { }
        }
        req.headers[headerName] = String(id).valueOf()
        
        let res = getRes()
        
        middleware(req, res, () => {
            req.should.have.property('id', id)
            res.headers.should.have.property(headerName, id)
            
            done()
        })
    })
    
    it('should work with other headerNames', (done) => {
        let middleware = reqid({ 'headerName': 'shabushabu' })
        let req = { headers: {} }
        let res = getRes()
        
        middleware(req, res, () => {
            req.should.have.property('id')
            res.headers.should.have.property('shabushabu', req.id)
            
            done()
        })
    })
})
