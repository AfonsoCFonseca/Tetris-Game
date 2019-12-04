
/******************        DATABASE         *****************/

var getFirebaseData = function(functionName, callback){
  $.ajax({
    url: '/'+functionName,
    dateType: 'json',
    success: function(data){
      callback(data);
    },
    error : function( err ){
      console.log("err")
      console.log(err)
      if( err != null ){
        logginOut();
      }
    }
  })
}
var postFirebaseData = function(obj, functionName, callback){
  $.ajax({
    url: '/'+functionName,
    type: 'POST',
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(obj),
    success: function(resultData) {
      callback(resultData);
    },
    error : function( err ){
      console.log("err")
      console.log(err)
      if( err != null ){
        logginOut();
      }
    }
  })
}
