[![Build Status](https://travis-ci.org/danp3d/express_reqid.svg?branch=master)](https://travis-ci.org/danp3d/express_reqid)
[![Code Climate](https://codeclimate.com/github/danp3d/express_reqid/badges/gpa.svg)](https://codeclimate.com/github/danp3d/express_reqid)
[![Issue Count](https://codeclimate.com/github/danp3d/express_reqid/badges/issue_count.svg)](https://codeclimate.com/github/danp3d/express_reqid)
[![Test Coverage](https://codeclimate.com/github/danp3d/express_reqid/badges/coverage.svg)](https://codeclimate.com/github/danp3d/express_reqid/coverage)

# express_reqid
Express middleware to include a unique request ID (for request tracing)

## Examples
```javascript

let idMiddleware = reqid({ headerName: 'X-My-Req-Id' })
app.use(idMiddleware)

app.get('/endpoint', (req, res) => {
  console.log(req.id) // <-- Cool! I have an ID!
})

```
