var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
var logger = require('morgan');
const mongoose=require('mongoose');
const tattooRoutes=express.Router();
const PORT = 4000;


let tattoos=require('./tattoos.model')

app.use(cors());
app.use(bodyParser.json());

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

mongoose.connect('mongodb://127.0.0.1:27017/tattoos',{useNewUrlParser:true });
const connection=mongoose.connection;

connection.once('open',function () {
  console.log("MongoDB database Connection is successful")

})

tattooRoutes.route('/').get(function(req, res){
    tattoos.find(function(err, tattoos) {
        if (err) {
            console.log(err);
        } else {
            res.json(tattoos);
        }
    });
});

tattooRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    tattoos.findById(id, function(err, tattoos) {
        res.json(tattoos);
    });
});

tattooRoutes.route('/add').post(function(req, res) {
    let tattoo = new tattoos(req.body);
    tattoo.save()
        .then(tattoo => {
            res.status(200).json({'tattoo': 'tattoos added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new tattoo failed');
        });
});

tattooRoutes.route('/update/:id').post(function(req, res) {
    tattoos.findById(req.params.id, function(err, tattoos) {
        if (!tattoos)
            res.status(404).send('data is not found');
        else
            tattoos.tattoo_name = req.body.tattoo_name;
        tattoos.tattoo_category = req.body.tattoo_category;
        tattoos.tattoo_artist = req.body.tattoo_artist;

        tattoos.save().then(tattoos => {
            res.json('tattoos updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

tattooRoutes.route('/tattoo_artist/:id').get(function(req, res) {
    tattoos.findById(req.params.id, function(err, tattoos){
        res.json(tattoos);
    });
});



app.use('/tattoos',tattooRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
