const express = require('express')
const cors = require('cors');
const server = express()

server.use(cors());

server.get('/hello',function (req, res){
    let mydata  = [
        { name: "Apple", type: "Fruit" },
        { name: "Banana", type: "Fruit" },
        { name: "Carrot", type: "Vegetable" },
        { name: "Broccoli", type: "Vegetable" },
        { name: "Orange", type: "Fruit" },
        { name: "Mozdalif", type: "Vegetable" },
      ];

    res.json(mydata)
})


server.listen(3000)

