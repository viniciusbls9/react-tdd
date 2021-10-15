const fallback = require('express-history-api-fallback')
const express = require('express')
const app = express()
// eslint-disable-next-line node/no-path-concat
const root = `${__dirname}/dist`
app.use(express.static(root))
app.use(fallback('index.html', { root }))
app.listen(process.env.PORT || 3000)
