const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("It's weekend");
    } else {
        // use res.write to send multiple lines, then finish with res.send();
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});