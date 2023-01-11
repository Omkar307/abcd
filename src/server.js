//initialize

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); //false=== nested objects are not correct
app.use(bodyParser.json());                                //true=== nested objects are correct


mongoose.connect("mongodb+srv://omkarnaik:omkar12345@cluster0.tdahlt8.mongodb.net/notesdb").then(function () {
    app.get("/", function (req, res) {
        const response={message : "API Works"};
        res.json(response);
    });

    const noterouter=require('./routes/Note');
    app.use("/notes", noterouter);

});

app.listen(5000, function () {
    console.log("server started at PORT:5000");
});

