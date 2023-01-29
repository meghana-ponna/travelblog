
const express = require('express')
const app = express()
app.use(express.json())
const cors=require('cors')
app.use(cors())

app.get('/contact', function (req, res) {
  const fs=require("fs")
  const data=JSON.parse(fs.readFileSync("queries.json","utf-8"))
  //console.log(data)
  res.send(JSON.stringify(data))
})
app.post('/queries', function (req, res) {
  var data1=req.body
  //console.log(data1)
  // obj1=JSON.parse(data1)
  const fs=require("fs")
  const data=JSON.parse(fs.readFileSync("queries.json","utf-8"))
  data.push(data1)
  fs.writeFileSync("queries.json",JSON.stringify(data),"utf-8")

  // res.send('Hello World api')
})


app.post('/places',function(req,res){
  const fs=require('fs')
data=req.body
console.log(req.body)
 places=fs.readFileSync('places.json','utf8')
  places=JSON.parse(places)
  places.push(req.body)
  fs.writeFileSync('places.json',JSON.stringify(places))
  res.send("places added sucessfully")}
  )



  app.get('/places',(req,res)=>
  {
    function readfile()
    {const fs=require('fs')
    places=fs.readFileSync('places.json','utf8')
    places=JSON.parse(places)
    return places
  }
  const obj=readfile()
    //console.log(obj)
    res.send(JSON.stringify(obj))
  })

  app.get('/users', function (req, res) {
    const fs=require("fs")
    const data=JSON.parse(fs.readFileSync("users.json","utf-8"))
    //console.log(data)
    res.send(JSON.stringify(data))
  })
  app.post('/users', function (req, res) {
    var data1=req.body
    //console.log(data1)
    // obj1=JSON.parse(data1)
    const fs=require("fs")
    const data=JSON.parse(fs.readFileSync("users.json","utf-8"))
    data.push(data1)
    fs.writeFileSync("users.json",JSON.stringify(data),"utf-8")
  
    // res.send('Hello World api')
  })
  app.post('/users1',function(req,res){
    var data1=req.body
    const fs=require("fs")
    fs.writeFileSync("users.json",JSON.stringify(data1),"utf-8")

  })
app.listen(3000)