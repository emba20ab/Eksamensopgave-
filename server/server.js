const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  res.send("Find dit livs kærlighed")
})

app.listen(port, () => {
  console.log(`Se min server på port: http://localhost:${port}`)
})


