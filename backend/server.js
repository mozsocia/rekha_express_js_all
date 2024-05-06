const express = require('express')
const cors = require('cors');
const server = express()

server.use(cors());

server.get('/hello', function (req, res) {
  let secondData = {
    "wife": "rekha",
    age : 29,
    height : 5.4
  }

  let data = {
    "name": "mozdalif",
    profession: "progarmmer",
    age: 50,
    "marriage": secondData
  }

  res.json(data)
})


server.listen(3000)

