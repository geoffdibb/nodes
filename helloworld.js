const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
let array = ['blankdata', 'blankdata2']

app.get("/", (req, res) => {

    res.send("Hello from express")
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/create", (req, res) => {
    let num1 = req.body.numa;
    let num2 = req.body.numb;
    let results = num1 + num2;
    res.send(200, results);
});

app.post("/array", (req, res) => {
    let name = req.body.name;
    let arrayprint = array.push(name);
    res.send(200, array);
});

app.delete("/delete", (req, res) => {
    let name = req.body.name;
    pulled = _.pull(array, name);
    res.send(200, array);
});

app.put("/update", (req, res) => {
    let name = req.body.name;
    var pos = array.indexOf(name);

    let newname = req.body.newname;
    _.set(array, pos, newname);
    res.send(200, array);

});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server running on port', port));