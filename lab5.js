let express = require('express');
let bodyParser = require('body-parser'); 
let app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let db =[];

app.use(express.static('img'));
app.use(express.static('views'));
//app.use(express.static('background'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views'+'/homepage.html');
    //for some reason it kept directing to index so i changed index.html to be identical to homepage.html
});
app.get('/add', function (req, res) {
    res.sendFile(__dirname + '/views'+'/add.html');
});
app.post('/data', function (req, res) {
    db.push({
        name: req.body.name,
        dueDate: req.body.dueDate,
        description: req.body.description
    });
    //res.send(req.body);
});

app.get('/list', function (req, res) {
    res.render('list.html', {ar: db});
});

app.listen(8080);




/*
let express = require('express');
let app = express();
let morgan = require ('morgan');

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/img"));

//middleware
app.use(morgan('common')); 
app.use(function(req,res,next){
    console.log('Middleware....1')
    next()
})
app.use(function(req,res,next){
    console.log('Middleware....2')
    next()
})


app.get('/', function(req,res){
    res.sendFile("index.html");
});

app.get('/about',function(req,res){
    res.sendFile(__dirname + "/views/"+ "about.html")
})

app.listen(8080); 
*/