var express=require('express');
//app set up
var app=express();
var server=app.listen(4000,funciton(){
    console.log('listening to requests on port 4000');
}); 