const express = require('express');
const app = express();

app.get('/light', function(req,res){
    res.send('light data1')
})

app.get('/temp', function(req,res){
    res.send('temp data')
})

app.get('/sound', function(req,res){
    res.send('sound data')
})

app.listen(8081,function() {
    console.log('app listening on 8081')
    
})