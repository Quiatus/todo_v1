const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.send('hello');
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});