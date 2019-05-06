const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const tattoosRoutes = express.Router()

let Tattoos = require('./tattoos.model');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/tattoos', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

tattoosRoutes.route('/').get(function (req, res) {
    Tattoos.find(function (err, tattoos) {
        if (err) {
            console.log(err);
        } else {
            res.json(tattoos);
        }
    });
});

tattoosRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Tattoos.findById(id, function (err, tattoos) {
        res.json(tattoos);
    });
});

tattoosRoutes.route('/add').post(function (req, res) {
    let tattoos = new Tattoos(req.body);
    tattoos.save()
        .then(tattoos => {
            res.status(200).json({'tattoos': 'New Appointment added successfully'});
        })
        .catch(err => {
            res.status(400).send('New Appointment adding failed');
        });
});

tattoosRoutes.route('/update/:id').post(function (req, res) {
    Tattoos.findById(req.params.id, function (err, tattoos) {
        if (!tattoos)
            res.status(404).send('data is not found');
        else
            tattoos.tattoos_Date = req.body.tattoos_Date;
            tattoos.tattoos_Time = req.body.tattoos_Time;
             tattoos.tattoos_Notes = req.body.tattoos_Notes;


        tattoos.save().then(tattoos => {
            res.json('Todo updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


app.use('/tattoos', tattoosRoutes);

app.listen(function () {
    console.log(" Server is running on port: ");
});