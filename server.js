const express = require('express')
const path = require('path')
const request  = require('request')
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const json ={
  
}


/* request(recipe, function(err, res, body) {  
    json.data = JSON.parse(body)
    console.log(json.data) 
    return  json.data
    }) */


app.get('/sanity', function (req, res) {
   

    res.send("OK")
})


app.get('/recipes/:food', function (req, res) {
    let searchFood = req.params.food
    
    request(`http://www.recipepuppy.com/api/?q=${searchFood}`, function(err, response, body) {  
    json.data = JSON.parse(body).results
    console.log(json.data)
    res.send(json.data)
});
   

})

const port = 8080 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})