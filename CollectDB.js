const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser');

//Base URL for the API
// const base_url = "https://api.example.com";
const base_url = "https://localhost:5000";

//set the template engine
app.set('Views',path.join(__dirname,"/public/Views"));
app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(__dirname + '/public'))

function Login(){
    app.get('/',(req,res) => res.render("Login/index"))
    app.get('/SignIn',async(req,res) => res.render("Login/SignIn"))
    app.get('/SignUp',async(req,res) => res.render("Login/SignUp"))


}