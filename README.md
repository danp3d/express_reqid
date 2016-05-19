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
