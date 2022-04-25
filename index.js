const express = require('express');

const app = express();
var bodyParser = require("body-parser");
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

const tasks = [
	
];
const prices = [
	
];
const completed = {};
app.post("/removetask", (req, res) => {
	let x=0;
	for(let key in req.body){
		x = key;
	}
	console.log(x-1);
	tasks.splice(x-1,1);
	prices.splice(x-1,1);
	res.redirect('/index')
});
app.get('/new', (req,res) => {
	res.render('new')
})
app.post('/addtask', function (req, res) {
    var newTask = req.body;
	console.log(newTask)
    tasks.push(newTask.itemName);
	prices.push(parseInt(newTask.priceName))
    res.redirect("/index");
});
app.get('/', (req, res) => {
	res.render('top');
});
app.get('/index', (req, res) => {
	let sum = 0;
	for(let price of prices){
		sum += price;
		console.log(price);
	}
	res.render('index',{ tasks,prices, sum });
});

app.listen(9483);
