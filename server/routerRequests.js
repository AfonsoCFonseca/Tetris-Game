const express = require('express')
const router = express.Router();



router.post( '/teste', function( req, res ){
  console.log( "testing" )
})

module.exports = router;
