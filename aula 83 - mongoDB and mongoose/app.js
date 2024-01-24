// inicial config
var express = require('express');
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/person'
var app = express();
var port = process.env.PORT || 3000;


// read JSON / middleware
app.use(
	express.unlencoded({
		extended: true
	})
)

app.use(express.json());


// db connection
mongoose.connect(url, {})
	.then(() => {
		console.log('database connected!');
	})
	.catch(err => console.log(err));


// object creation 
var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
})

var Person = mongoose.model('person', personSchema);


// send object to db
Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St.'
})
.save()
.then(() => {
	console.log("Person was created successfully!")
})
.catch((err)=> {
	console.log(err)
});



// template config
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	console.log('Request Url:' + req.url);

	res.json({ });
});

htmlController(app);

apiController(app); 




// port service
app.listen(port, () => {
	console.log("server is running at port " + port);
});


