//importing necessary modules 
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

//get method 
app.get('/bfhl', function(req, res) {
    const obj = {
        operation_code : 1
    };
    res.send(JSON.stringify(obj));
})

//post method 
app.post('/bfhl', function(req, res){
    const parsedJson = req.body;
    const x = parsedJson.data;
    console.log(x);
    var sendJson = {
        is_success : true,
        user_id : "prateek_uniyal_22052002",
        email : "pu3564@srmist.edu.in",
        roll_number :   "RA2011047010032", 
    }
    var numbers = [];
    var alphabetss = [];
    for(var i =0; i<x.length; i++)
    {
        if(/^\D*$/.test(x[i]) == false)
        {
            numbers.push(x[i]);
        }
        else 
        {
            alphabetss.push(x[i]);
        }
    }
    sendJson.numbers = numbers;
    sendJson.alphabets = alphabetss;
    res.send(sendJson);
});

app.listen(5000, function(){
    console.log("Listening...")
}
)