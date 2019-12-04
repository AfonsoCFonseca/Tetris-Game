const express = require('express')
const router = express.Router();
var full_path =  __dirname.replace("server","")+"/views/"


router.get('/', function(req,res){
  res.sendFile(full_path + "homepage.html");
})


module.exports = router;
